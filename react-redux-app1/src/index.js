import React from 'react';
import ReactDOM from 'react-dom';
//import App from './app';
import MoviesList from './container';
import {Provider} from 'react-redux';
//---moving store to its own file------------------------------------------------------------------------------
//import reducers from './reducer';
//import { createStore, applyMiddleware} from 'redux';
//const createStoreWithMiddleware = applyMiddleware()(createStore);


//ReactDOM.render(<Provider store = {store(reducers)}> 
//                   <App/>
//              </Provider> 
//             , document.getElementById('root'));
//---moving store to its own file-----------------------------------------------------------------------
import store from './store/index';
ReactDOM.render(<Provider store = {store}> 
                   <MoviesList/>
              </Provider> 
             , document.getElementById('root'));