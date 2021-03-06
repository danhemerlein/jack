import React, { Component } from "react";

export default class FastFoward extends Component {
  render() {
    return (
      <svg onClick={this.props.clickHandler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px">
      <path d="M51.29,29.85,32.67,11.39a2.54,2.54,0,0,0-2.78-.57,2.91,2.91,0,0,0-1.72,2.72v10.4L15.5,11.39a2.52,2.52,0,0,0-2.78-.57A2.91,2.91,0,0,0,11,13.54V50.46a2.91,2.91,0,0,0,1.72,2.72,2.55,2.55,0,0,0,2.78-.57L28.17,40.05V50.46a2.91,2.91,0,0,0,1.72,2.72,2.55,2.55,0,0,0,2.78-.57L51.29,34.15a3.07,3.07,0,0,0,0-4.3ZM14.09,51.19a.52.52,0,0,1-.6.14.89.89,0,0,1-.49-.87V13.54a.89.89,0,0,1,.49-.87.53.53,0,0,1,.2-.05.6.6,0,0,1,.4.19L29,27.62h0l2.07,2,1.61,1.6h0a1.09,1.09,0,0,1,0,1.46L29,36.37h0Zm35.8-18.46L31.26,51.19a.52.52,0,0,1-.6.14.89.89,0,0,1-.49-.87V38.52a1,1,0,0,1,.28-.72l3.68-3.65a3.09,3.09,0,0,0,0-4.3L30.45,26.2a1,1,0,0,1-.28-.72V13.54a.89.89,0,0,1,.49-.87.51.51,0,0,1,.2,0,.58.58,0,0,1,.4.18L49.89,31.27a1.09,1.09,0,0,1,0,1.46Z" />
      </svg>
    )
  }
}
