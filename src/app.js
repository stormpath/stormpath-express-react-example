import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactStormpath, { Router, LoginRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import { MasterPage, IndexPage, LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage } from './pages';

ReactStormpath.init();

ReactDOM.render(
  <Router history={createBrowserHistory()}>
  	<Route path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <LogoutRoute path='/logout' />
      <Route path='/verify' component={VerifyEmailPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <AuthenticatedRoute path='/profile' component={ProfilePage} />
  	</Route>
  </Router>,
  document.getElementById('app-container')
);