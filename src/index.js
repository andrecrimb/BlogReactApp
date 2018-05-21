import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom'
import reducers from './reducers';
import PostIndex from "./components/PostIndex";
import promise from 'redux-promise'

//Implementando o redux promise
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
            <Route path="/" component={PostIndex}/>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
