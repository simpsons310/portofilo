import React, { Component } from 'react';
import classes from './TopBar.module.css';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
import Logo from '../../components/Logo/Logo';

class TopBar extends Component {
  render() {
    return <div className={classes.TopBar}>
      <Logo/>
      <NavigationItems/>
    </div>
  }
}

export default TopBar;
