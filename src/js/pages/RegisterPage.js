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
            <div className='sp-login-form'>
              <div className="row" data-spIf="account.created">
                <div className="col-sm-offset-4 col-xs-12 col-sm-4">
                  <p className="alert alert-success" data-spIf="account.enabled">
                    Your account has been created. <LoginLink>Login Now</LoginLink>.
                  </p>
                  <div data-spIf="!account.enabled">
                    <p className="alert alert-success">Your account has been created. Please check your email for a verification link.</p>
                    <p className="pull-right">
                      <LoginLink>Back to Login</LoginLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row" data-spIf="!account.created">
                <div className="col-xs-12">
                  <div className="form-horizontal">

                    <div className="form-group">
                      <label htmlFor="givenName" className="col-xs-12 col-sm-4 control-label">First Name</label>
                      <div className="col-xs-12 col-sm-4">
                        <input type="text" className="form-control" id="givenName" name="givenName" placeholder="First Name" required={ true } />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="surname" className="col-xs-12 col-sm-4 control-label">Last Name</label>
                      <div className="col-xs-12 col-sm-4">
                        <input type="text" className="form-control" id="surname" name="surname" placeholder="Last Name" required={ true } />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="col-xs-12 col-sm-4 control-label">Email</label>
                      <div className="col-xs-12 col-sm-4">
                        <input type="text" className="form-control" id="email" name="email" placeholder="Email" required={ true } />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="customData.color" className="col-xs-12 col-sm-4 control-label">Color</label>
                      <div className="col-xs-12 col-sm-4">
                        <input type="text" className="form-control" id="customData.color" name="customData.color" placeholder="Color (e.g. blue)" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Password</label>
                      <div className="col-xs-12 col-sm-4">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" required={ true } />
                      </div>
                    </div>

                    <div key="register-button" className="form-group">
                      <div className="col-sm-offset-4 col-sm-4">
                        <p className="alert alert-danger" data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
                        <button type="submit" className="btn btn-primary">Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RegistrationForm>
        </div>
      </DocumentTitle>
    );
  }
}