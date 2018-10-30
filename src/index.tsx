import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import Base from './router';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const defaultState = { article: [] };
const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(sagaMiddleware,createLogger)
);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <Base />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
