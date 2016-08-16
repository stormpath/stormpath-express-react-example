import React from 'react';
import DocumentTitle from 'react-document-title';

import { LoginForm } from 'react-stormpath';

export default class LoginPage extends React.Component {
  onSubmitError(e, next) {
    console.log('onSubmitError()', e);
    next();
  }

  onSubmitSuccess(e, next) {
    console.log('onSubmitSuccess()', e);
    setTimeout(next, 1000 * 3);
  }

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
          <LoginForm
            onSubmitError={this.onSubmitError.bind(this)}
            onSubmitSuccess={this.onSubmitSuccess.bind(this)} />
        </div>
      </DocumentTitle>
    );
  }
}
