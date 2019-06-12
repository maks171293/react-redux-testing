import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SelectSimple from '../Select';

export class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
          <SelectSimple />
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
