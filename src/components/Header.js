import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

class Header extends Component {
    render() {
        return (
            <AppBar position="fixed" id="header">
                <Toolbar>
                    
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;