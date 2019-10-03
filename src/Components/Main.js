import React, { Component } from 'react';
import SubContent from './Subcontents';
import Advertisement from './Advertisement';

class Main extends Component {
  render() {
    return <div className="main">
      <SubContent />
      <SubContent />
      <SubContent />
      <Advertisement />
    </div>;
  }
}

export default Main;