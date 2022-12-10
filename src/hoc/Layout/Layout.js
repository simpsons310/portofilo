import React, { Component } from "react";

import Aux from '../Auxiliary/Auxiliary';
import TopBar from '../../containers/TopBar/TopBar';

class Layout extends Component {
  render() {
    return <Aux>
      <TopBar/>
    </Aux>;
  }
}

export default Layout;
