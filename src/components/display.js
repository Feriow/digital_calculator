import React, { Component } from "react";

class Display extends Component {
  render() {
    let cssClass;

    if (this.props.error) {
      cssClass = "display borderBlack error";
    } else {
      cssClass = "display borderBlack";
    }

    return <div className={cssClass}>{this.props.value}</div>;
  }
}

export default Display;
