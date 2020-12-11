// src/App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import Home from './Home';
import Protected from './Protected';
import UserList from './UserList';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-165088.okta.com/oauth2/default',
  clientId: '0oa1hznwqhIDjM6Zu4x7',
  redirectUri: window.location.origin + '/login/callback'
});
class App extends Component {
  render() {
    return (
      <Router>
        <Security oktaAuth={oktaAuth}>
          <Route path='/' exact={true} component={Home}/>
          <SecureRoute path='/protected' component={Protected}/>
          <Route path='/login/callback' component={LoginCallback} />
          <SecureRoute path='/users' component={UserList}/>
        </Security>
      </Router>
    );
  }
}

export default App;