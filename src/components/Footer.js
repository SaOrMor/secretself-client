import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../context/auth-context';

 

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <h3>Do you have any question? Contact me at: sall.morise@gmail.com</h3>
            </footer>
        )
    }
}


export default withAuth(Footer)