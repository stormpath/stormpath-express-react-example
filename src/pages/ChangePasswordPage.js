import React from 'react';
import DocumentTitle from 'react-document-title';

import { ChangePasswordForm } from 'react-stormpath';

export default class ChangePasswordPage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Change Password`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Change Password</h3>
              <hr />
            </div>
          </div>

          <ChangePasswordForm spToken={this.props.location.query.sptoken} style={{backgroundColor: 'pink'}}/>
        </div>
      </DocumentTitle>
    );
  }
}
