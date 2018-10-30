import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { Article, App } from '../containers';

export default class Base extends React.PureComponent {
  
  public render () {
    return (
      <Router>
        <Switch>
          <Route exact={true} component={App} path='' />
          <Route exact={true} component={Article} path='/article' />
        </Switch>
      </Router>
    )
  }
  
}