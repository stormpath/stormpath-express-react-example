import React from 'react';
import DocumentTitle from 'react-document-title';

import { ChangePasswordForm } from 'react-stormpath';

export default class ChangePasswordPage extends React.Component {
  render() {
    var spToken = this.props.location.query.sptoken;
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Change Password</h3>
              <hr />
            </div>
          </div>
          <ChangePasswordForm spToken={spToken} />
        </div>
      </DocumentTitle>
    );
  }
}
