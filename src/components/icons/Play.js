import React, { Component } from "react";

export default class Play extends Component {
  render() {
    return (
      <svg onClick={this.props.clickHandler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px">
      <path d="M19.51,56.79a4.65,4.65,0,0,1-1.88-.41A4.47,4.47,0,0,1,15,52.27V11.73a4.5,4.5,0,0,1,7.47-3.4L45.65,28.61a4.5,4.5,0,0,1,0,6.78L22.46,55.67A4.45,4.45,0,0,1,19.51,56.79Zm0-47.58a2.66,2.66,0,0,0-1.06.23A2.46,2.46,0,0,0,17,11.73V52.27a2.51,2.51,0,0,0,4.16,1.89L44.33,33.89a2.51,2.51,0,0,0,0-3.78h0L21.15,9.84A2.46,2.46,0,0,0,19.52,9.21Z" /></svg>
    )
  }
}
