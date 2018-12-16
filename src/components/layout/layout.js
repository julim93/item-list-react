import React from 'react';
import logo from '../../logo.svg';

const Layout = (props) => {
  return (
    <div>
      <div className="NavBar">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {props.children}
    </div>
  );
}

export default Layout;
