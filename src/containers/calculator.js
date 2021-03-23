import React, { Component } from "react";
import { Button } from "../components/button";
import Display from "../components/display";

export default class Calculator extends Component {
  initialState = {
    firstValue: 0,
    secondValue: 0,
    operator: 1,
    operation: "",
    error: false,
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  putValue = (value) => {
    const lastValue =
      this.state.operator === 1
        ? this.state.firstValue
        : this.state.secondValue;

    // eslint-disable-next-line default-case
    switch (this.state.operator) {
      case 1:
        this.setState({ firstValue: lastValue * 10 + value });
        break;
      case 2:
        this.setState({ secondValue: lastValue * 10 + value });
        break;
    }
  };

  getValue = () => {
    const { firstValue, secondValue, operator, operation, error } = this.state;
    // eslint-disable-next-line default-case
    switch (operator) {
      case 1:
        return firstValue;
      case 2:
        return secondValue;
      case 3: {
        let result;
        if (operation === "sum") {
          result = firstValue + secondValue;
        } else if (operation === "sub") {
          result = firstValue - secondValue;
        } else if (operation === "tms") {
          result = firstValue * secondValue;
        } else if (operation === "div") {
          if (error) {
            result = "ERROR - division by zero";
          } else {
            result = firstValue / secondValue;
          }
        } else if (operation === "sqr") {
          result = firstValue * firstValue;
        }
        return result;
      }
    }
  };

  pickOperation = (code) => {
    let operator = 2;
    let operation;
    // eslint-disable-next-line default-case
    switch (code) {
      case 1:
        operation = "sum";
        break;
      case 2:
        operation = "sub";
        break;
      case 3:
        operation = "tms";
        break;
      case 4:
        operation = "div";
        break;
      case 5:
        operation = "sqr";
        operator = 3;
        break;
    }
    this.setState({ operator, operation });
  };

  execOperation = () => {
    this.divError();
    this.setState({ operator: 3 });
  };

  divError = () => {
    if (this.state.secondValue === 0 && this.state.operation === "div") {
      this.setState({ error: true });
    }
  };

  clear = () => {
    this.setState(this.initialState);
  };

  render() {
    const { operator, operation, error } = this.state;

    return (
      <div className={"calculator borderBlack"}>
        <div>
          <Display value={this.getValue()} error={error} />
        </div>
        <div className={"buttonsContainer"}>
          <Button
            display={"1"}
            onClick={() => this.putValue(1)}
            disabled={operator === 3}
          />
          <Button
            display={"2"}
            onClick={() => this.putValue(2)}
            disabled={operator === 3}
          />
          <Button
            display={"3"}
            onClick={() => this.putValue(3)}
            disabled={operator === 3}
          />
          <Button
            display={"4"}
            onClick={() => this.putValue(4)}
            disabled={operator === 3}
          />
          <Button
            display={"5"}
            onClick={() => this.putValue(5)}
            disabled={operator === 3}
          />
          <Button
            display={"6"}
            onClick={() => this.putValue(6)}
            disabled={operator === 3}
          />
          <Button
            display={"7"}
            onClick={() => this.putValue(7)}
            disabled={operator === 3}
          />
          <Button
            display={"8"}
            onClick={() => this.putValue(8)}
            disabled={operator === 3}
          />
          <Button
            display={"9"}
            onClick={() => this.putValue(9)}
            disabled={operator === 3}
          />
          <Button
            display={"0"}
            onClick={() => this.putValue(0)}
            disabled={operator === 3}
          />
          <Button
            display={"+"}
            onClick={() => this.pickOperation(1)}
            disabled={operator !== 1}
          />
          <Button
            display={"-"}
            onClick={() => this.pickOperation(2)}
            disabled={operator !== 1}
          />
          <Button
            display={"*"}
            onClick={() => this.pickOperation(3)}
            disabled={operator !== 1}
          />
          <Button
            display={"\u00F7"}
            onClick={() => this.pickOperation(4)}
            disabled={operator !== 1}
          />
          <Button
            display={"x²"}
            onClick={() => this.pickOperation(5)}
            disabled={operator !== 1}
          />
          <Button
            display={"="}
            onClick={() => this.execOperation()}
            disabled={operator !== 2 || operation === "sqr"}
          />
          <Button display={"C"} onClick={() => this.clear()} />
        </div>
      </div>
    );
  }
}
