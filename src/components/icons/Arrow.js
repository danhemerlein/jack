import React, { Component } from "react";

export default class Arrow extends Component {
  render() {
    return (
      <svg onClick={this.props.clickHandler} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" space="preserve" fill="black"><g><polygon points="36.8,53.496 60.644,79.473 65.433,75.077 41.596,49.109 67.596,25.323 63.209,20.527 32.404,48.708 36.792,53.504" /></g></svg>
    )
  }
}
