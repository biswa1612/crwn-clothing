import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';


ReactDOM.render(                              //provider- once store value is passed it gives it to rest of the application
  <Provider store={store}>                                                 
    <BrowserRouter>                                     
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


