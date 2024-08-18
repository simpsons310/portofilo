import React from "react";
import profileLogo from '../../assets/images/profile-logo.png'
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <p className={classes.Brand}>Giang Nguyen</p>
  </div>
);

export default logo;