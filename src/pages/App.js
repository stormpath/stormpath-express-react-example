import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import Header from './Header';
import { LoginLink } from 'react-stormpath';

export default class App extends React.Component {
  render() {
    return (
      <DocumentTitle title='Stormpath React+Flux Example'>
        <div className='App'>
          <Header />
          { this.props.children }
        </div>
      </DocumentTitle>
    );
  }
}