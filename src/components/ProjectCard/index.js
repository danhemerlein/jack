import React, { Component } from "react";

import './ProjectCard.scss'
import cx from 'classnames';

import debounce from "utils/debounce";

export default class ProjectCard extends Component {
  setHeight = () => {
    const projectCards = document.querySelectorAll('.ProjectCard');
    const header = document.querySelector('.HomePage__header');

    const pcHeight = (window.innerHeight - header.offsetHeight) / 3;

    for (let project of projectCards) {
      project.style.height = pcHeight + "px";
    }

  }

  debounceAPHeight = () => {
    debounce(this.setHeight(), 100);
  }

  componentDidMount() {
    this.setHeight();

    window.addEventListener("resize", () => {
      this.setHeight();
    });
  }

  render() {
  
    return (
      <div className={cx("ProjectCard flex items-center justify-center")}>
        {this.props.id}
        {this.props.title}
      </div>
    )
  }
}
