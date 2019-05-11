import React, { Component } from "react";

import './ProjectCard.scss'
import cx from 'classnames';

export default class ProjectCard extends Component {
  render() {

    const divStyle = {
      height: "140px"
    };
  
    return (
      <div style={divStyle} className={cx("ProjectCard flex items-center justify-center")}>
        {this.props.title}
      </div>
    )
  }
}
