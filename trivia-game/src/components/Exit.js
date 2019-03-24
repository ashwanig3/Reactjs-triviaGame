import React, { Component } from "react";

export default class Exit extends Component {
  render() {
    const { score } = this.props;
    return (
      <div className="response-container">
        <p className="final-score">Your Score is {score} out of 100.</p>
      </div>
    );
  }
}
