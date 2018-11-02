import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import RouterMap from './router';
import rootSaga from './saga';

import './common/indexStyle.less';

const sagaMiddleware = createSagaMiddleware();
const defaultState = { article: [] };
const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(sagaMiddleware,createLogger)
);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <RouterMap />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root') as HTMLElement
);
