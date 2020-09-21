import React, { Component } from "react";
import "./App.css";
import OperatorsNumSection from "./operators-num-section/operators-num-section.jsx";

class CalculatorApp extends Component {
  state = {
    value: "0",
  };

  ButtonPressed = (btn) => {
    console.log(this.state.value);
    if (btn === "=") {
      this.setState({
        value: eval(this.state.value),
      });
    } else if (btn === "AC") {
      this.setState({
        value: "",
      });
    } else if (btn === "CE") {
      this.setState({
        value: this.state.value.slice(0, -1),
      });
    } else {
      this.setState({
        value: this.state.value + btn,
      });
    }
  };

  render() {
    return (
      <div className="calculator-app">
        <div className="result-section">
          <h1> {this.state.value} </h1>
        </div>
        <OperatorsNumSection onClick={this.ButtonPressed} />
      </div>
    );
  }
}

export default CalculatorApp;
