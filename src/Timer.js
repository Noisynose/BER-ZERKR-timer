import React, { Component } from 'react';
import Countdown from './Countdown';

class Timer extends Component {
  render() {
    return (
      <div className="ber-zerkr-timer">
        <Countdown milliseconds="5000" />
      </div>
    );
  }
}

export default Timer;
