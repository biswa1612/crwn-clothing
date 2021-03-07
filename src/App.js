import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {    //in this we will have access to 
  constructor(){
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {     //we are fetching data from firestore database
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);           //userAuth is passed ... in firebase utils it checks if snapshot exists if not then it will create one and the return userRef

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

     this.setState({ currentUser: userAuth});     //when the user logs out the currentuser value is set to null
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (                     //switch- as soon as it sees a path is matching then it will not render any another page, but then because of '/' it will always render homepage so to avoid that we can also have exact it consists of boolean values by default exact is true 
      <div>
        <Header currentUser={this.state.currentUser}/>                              
        <Switch>                      
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }         
}

export default App;
