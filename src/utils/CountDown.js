import React from "react";

class CountDown extends React.Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      count: this.props.startCount
    };
  }

  componentDidMount() {
    this.intervalHandle = setInterval(() => {
      const newCount = this.state.count - 1;
      if (newCount >= 0) {
        this.setState({ count: newCount });
      } else {
        window.clearInterval(this.intervalHandle);
      }
    }, 1000);
  }

  render() {
    return this.props.children(this.state.count);
  }
}

export default CountDown;
