import React, { Component } from 'react';

class Countdown extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            milliseconds : this.props.milliseconds || 0,
            refreshRate : this.props.decrement || 1000,
            status : ((this.props.milliseconds||0) <= 0) ? "FINISHED" : "RUNNING" ,
        };
    }

    componentDidMount() {
        this.timerIdentifier = setInterval(
            () => this.tick(),
            this.state.refreshRate
        );
    }

    componentWillUnmount() {
        this.stop();
    }

    stop() {
        if (this.timerIdentifier) {
            clearInterval(this.timerIdentifier);
        }
    }

    tick() {
        const millisecondsToGo = this.state.milliseconds - this.state.refreshRate;

        this.setState({
            milliseconds : millisecondsToGo,
            status : ( millisecondsToGo <= 0 ) ? "FINISHED" : "RUNNING",
        });

        if (this.state.status === "FINISHED") {
            this.stop();
        }
    }

    render() {
        return (
            <div className="countdown">
                {this.state.milliseconds}
            </div>
        );
    }
}

export default Countdown;