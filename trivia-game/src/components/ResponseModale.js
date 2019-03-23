import React, { Component } from "react";

export default class ResponseModale extends Component {
  render() {
    const { isCorrect } = this.props;
    if (isCorrect) {
      return (
        <div className="response-container">
          <span className="cross" onClick={() => this.props.handleModale()}>
            X
          </span>
          <p className="right">
            <i class="fas fa-check" />
            Right Answer!
          </p>
        </div>
      );
    } else {
      return (
        <div className="response-container">
          <span className="cross" onClick={() => this.props.handleModale()}>
            X
          </span>
          <p className="wrong">
            <i class="fas fa-times" />
            Wrong Answer!
          </p>
        </div>
      );
    }
  }
}
