import React from 'react';
import DocumentTitle from 'react-document-title';

import { UserComponent } from 'react-stormpath';

export default class ProfilePage extends UserComponent {
  onFormSubmit(e) {
    e.preventDefault();
  }
  
  render() {
    var user = this.state.user;
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
              <form className="form-horizontal" submit={this.onFormSubmit.bind(this)}>
                <div className="form-group">
                  <label htlmFor="spFirstName" className="col-xs-12 col-sm-4 control-label">First Name</label>
                  <div className="col-xs-12 col-sm-4">
                    <input className="form-control" id="spFirstName" value={this.state.user.givenName} placeholder="First Name" disabled="true" />
                  </div>
                </div>
                <div className="form-group">
                  <label htlmFor="spLastName" className="col-xs-12 col-sm-4 control-label">Last Name</label>
                  <div className="col-xs-12 col-sm-4">
                    <input className="form-control" id="spLastName" value={this.state.user.surname} placeholder="Last Name" disabled="true" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-4 col-sm-4">
                    <button type="submit" className="btn btn-primary" disabled="true">Save (not supported yet)</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
