import React, { Component } from "react";

import './ProjectCard.scss'
import cx from 'classnames';

export default class ProjectCard extends Component {
  render() {
  
    return (
      <div className={cx("ProjectCard col-4")}>
        {this.props.id}
        {this.props.title}
      </div>
    )
  }
}
