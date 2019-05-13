import React, { Component } from "react";

import './ProjectCard.scss'
import cx from 'classnames';

export default class ProjectCard extends Component {
  render() {

    const divStyle = {
      height: "240px"
    };

    let longRoles = false;
    if (this.props.roles.split('/').length > 3) {
      longRoles = true; 
    }
  
    return (
      <div onClick={() => {this.props.clickHandler(this.props.id - 1)}} style={divStyle} className={cx("ProjectCard p2 flex items-center justify-center flex-col")}>
        <div className={cx("bold title-sans-serif")}>
          {this.props.title}
        </div>

        <div className={cx("title-sans-serif")}>
          by&nbsp;{this.props.artist}
        </div>

        <div className={cx("mt1", { 'block': longRoles === true }, { 'none': longRoles === false })}>
          <div className={cx("title-sans-serif")}>
            {this.props.roles.split('/')[0]}/
            {this.props.roles.split('/')[1]} 
          </div>

          <div className={cx("title-sans-serif text-center")}>
            {this.props.roles.split('/')[2]}/
            {this.props.roles.split('/')[3]}
          </div>


        </div>
        
        <div className={cx("title-sans-serif mt1", { 'none': longRoles === true })}>
          {this.props.roles}
        </div>
      </div>
    )
  }
}
