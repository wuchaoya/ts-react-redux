import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import ArticleDeil from '../containers/Article';
import Articles from '../containers/Articles';
import TimeFile from '../containers/TimeFile';

const RouterMap = () => (
  <Switch>
    <Route exact={true} path='/' component={Articles} />
    <Route exact={true} path='/article/:Id' component={ArticleDeil} />
    <Route exact={true} path='/time-file' component={TimeFile} />
  </Switch>
)

export default RouterMap
