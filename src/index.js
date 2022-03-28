import React from 'react';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import { forbiddenWordsMd } from 'redux/middleware';
import { sagaWatcher } from 'redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, saga,forbiddenWordsMd 
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
saga.run(sagaWatcher)
const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
render(
  app,
  document.getElementById('root')
);

