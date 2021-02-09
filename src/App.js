import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'


function App() {           
  return (                     //switch- as soon as it sees a path is matching then it will not render any another page, but then because of '/' it will always render homepage so to avoid that we can also have exact it consists of boolean values by default exact is true 
    <div>
      <Header />                              
      <Switch>                      
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
