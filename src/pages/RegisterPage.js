import React from 'react';
import DocumentTitle from 'react-document-title';

import { RegistrationForm, LoginLink } from 'react-stormpath';

export default class RegisterPage extends React.Component {
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
          <RegistrationForm>
            <div>
              <label>First Name</label>
              <input type="text" name="givenName" />
            </div>
            <div>
              <label>Custom name</label>
              <input type="text" name="customData.name" />
            </div>
            <div data-spIf="form.error">
              <strong>Error:</strong><br />
              <span data-spBind="form.errorMessage" />
            </div>
            <input type="submit" />
          </RegistrationForm>
        </div>
      </DocumentTitle>
    );
  }
}