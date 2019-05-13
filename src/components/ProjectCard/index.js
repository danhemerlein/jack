import React, { Component } from "react";

import './ProjectCard.scss'
import cx from 'classnames';

export default class ProjectCard extends Component {
  render() {

    const divStyle = {
      height: "240px"
    };
  
    return (
      <div style={divStyle} className={cx("ProjectCard flex items-center justify-center flex-col")}>
        <div>{this.props.title}</div>
        <div>
          by&nbsp;{this.props.artist}
        </div>
      </div>
    )
  }
}
