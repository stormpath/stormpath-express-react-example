import React from 'react';
import DocumentTitle from 'react-document-title';

import { RegistrationForm, LoginLink } from 'react-stormpath';

export default class RegisterPage extends React.Component {
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
      <DocumentTitle title={`Registration`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Registration</h3>
              <hr />
            </div>
          </div>
          <RegistrationForm
            onSubmitError={this.onSubmitError.bind(this)}
            onSubmitSuccess={this.onSubmitSuccess.bind(this)} />
        </div>
      </DocumentTitle>
    );
  }
}