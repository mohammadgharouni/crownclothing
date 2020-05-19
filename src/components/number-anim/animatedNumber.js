import AnimatedNumber from "animated-number-react";
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    value: 150
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  formatValue = value => value.toFixed(2);
  render() {
    return (
      <div>
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <AnimatedNumber
          value={this.state.value}
          formatValue={this.formatValue}
        />
      </div>
    );
  }
}