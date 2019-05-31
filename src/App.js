import React from 'react';
import './App.css';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import { loginFlow } from './sagas/index';
import { login } from './apis/microsoftService';
import createSagaMiddleware from 'redux-saga';
import Resolver from './components/resolver';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(loginFlow)

function App() {
  return (
    <Provider store={store}>
      <Resolver />
      <button onClick={() => login()}>Auth</button>
    </Provider>
  );
}

export default App;