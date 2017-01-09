import React from 'react';
import DocumentTitle from 'react-document-title';

import { LoginForm, SocialLoginLink } from 'react-stormpath';

export default class LoginPage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Login</h3>
              <hr />
            </div>
          </div>
          <LoginForm />
          <SocialLoginLink accountStoreHref="https://dev.i.stormpath.com/v1/directories/Astrjazg4iZGBGoWYzoxo">Login with GitHub</SocialLoginLink>
        </div>
      </DocumentTitle>
    );
  }
}
