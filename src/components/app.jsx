import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';

import Header from './header';
import AppModal from './form/modal';

export default class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <div className="site" >
          <div className="site-main container" >
            {this.props.children}
          </div>
          <AppModal />
        </div>
      </div>
    );
  }
}
