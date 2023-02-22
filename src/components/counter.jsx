import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState( {count: this.state.count + 1} );
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={this.handleIncrement }
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
