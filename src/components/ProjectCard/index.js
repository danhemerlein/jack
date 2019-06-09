import React, { Component } from "react";

import Image from 'components/base/Image';

import './ProjectCard.scss'
import cx from 'classnames';

import PlayIcon from 'components/icons/Play';

export default class ProjectCard extends Component {
  render() {

    let longRoles = false;
    if (this.props.roles.split('/').length > 2) {
      longRoles = true;
    }
  
    return (
      <div onClick={() => {this.props.clickHandler(this.props.id - 1)}} className={cx("ProjectCard flex items-center justify-center flex-col h100 w100")}>
        <div className={cx("ProjectCard__container relative h100 w100")}>

          <div className="w100 h100 flex">
            <Image src={this.props.image.fields.file.url} alt={this.props.image.fields.file.url} />
          </div>

          <div className="ProjectCard__overlay bg-white flex justify-center flex-col items-center absolute l0 t0 r0 b0">

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
                {this.props.roles.split('/')[2]}
                <span className={cx("", { 'inline-block': this.props.roles.split('/').length === 4 }, { 'none': this.props.roles.split('/').length !== 4 })}>/</span>
                {this.props.roles.split('/')[3]}
              </div>

            </div>
            
            <div className={cx("title-sans-serif mt1", { 'none': longRoles === true })}>
              {this.props.roles}
            </div>

            <div className="ProjectCard__svg-container mt2">
              <PlayIcon></PlayIcon>
            </div>

            <div className="ProjectCard__CTA title-sans-serif mt2">
              {this.props.cta}
            </div>

          </div>

        </div>

      </div>
    )
  }
}
