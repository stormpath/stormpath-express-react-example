import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class ProfilePage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`My Profile`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <UserProfileForm>
                <div className='sp-update-profile-form'>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="form-horizontal">
                        <div className="form-group">
                          <label htmlFor="givenName" className="col-xs-12 col-sm-4 control-label">First name</label>
                          <div className="col-xs-12 col-sm-4">
                            <input type="text" className="form-control" id="givenName" name="givenName" placeholder="First name" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="surname" className="col-xs-12 col-sm-4 control-label">Last name</label>
                          <div className="col-xs-12 col-sm-4">
                            <input type="text" className="form-control" id="surname" name="surname" placeholder="Last name" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" className="col-xs-12 col-sm-4 control-label">Email</label>
                          <div className="col-xs-12 col-sm-4">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="customData.color" className="col-xs-12 col-sm-4 control-label">Color</label>
                          <div className="col-xs-12 col-sm-4">
                            <input type="customData.color" className="form-control" id="customData.color" name="customData.color" placeholder="Color" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Password</label>
                          <div className="col-xs-12 col-sm-4">
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                          </div>
                        </div>
                        <div key="update-button" className="form-group">
                          <div className="col-sm-offset-4 col-sm-4">
                            <p className="alert alert-danger" data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
                            <p className="alert alert-success" data-spIf="form.successful">Profile updated.</p>
                            <button type="submit" className="btn btn-primary">
                              <span data-spIf="!form.processing">Update</span>
                              <span data-spIf="form.processing">Updating...</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </UserProfileForm>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
