import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../context/auth-context';

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={'/'} id='home-btn'>
          <img className="logo" src="https://insegreto.com/svg/new-logo.svg" alt= "logo" />
        </Link> 

        <h1 className="secretSelf"> Your Secret Self</h1>

        {this.props.isLoggedIn ? (
          <>
           { /* <p>email: {this.props.user && this.props.user.email}</p>  */ }
            <button className="navbar-button" onClick={this.props.logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button">Login</button>{' '}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{' '}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
