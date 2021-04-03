import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


import Header from './components/header/header.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollections} from './redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';


import { GlobalStyle } from './global.styles';

class App extends React.Component {    //in this we will have access to 
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {     //we are fetching data from firestore database
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);           //userAuth is passed ... in firebase utils it checks if snapshot exists if not then it will create one and the return userRef

        userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
           });
        });
      }

     setCurrentUser(userAuth);     //when the user logs out the currentuser value is set to null
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (                     //switch- as soon as it sees a path is matching then it will not render any another page, but then because of '/' it will always render homepage so to avoid that we can also have exact it consists of boolean values by default exact is true 
      <div>
        <GlobalStyle />
        <Header/>                            
        <Switch>                      
            <Route exact path='/' component={HomePage} />         
            <Route path='/shop' component={ShopPage} /> 
            <Route path='/contact' exact render = {()=> window.location.href = 'https://biswajit1612.github.io/'} />             
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin'                       //if a user is logged in it will redirect us to homepage....exact is not used in shop because then we have other sections
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              } 
            />
        </Switch>
      </div>
    );
  }         
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))         //whatever object we are passing in dispatch tells redux that it is an action object that needs to be passed to rest of the applications
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
