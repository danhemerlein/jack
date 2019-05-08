import React, { Component } from "react";

import debounce from "utils/debounce";

import './HomePage.scss'
import cx from 'classnames';

import ProjectCard from 'components/ProjectCard';

export default class HomePage extends Component {

  setHeight = () => {
    const homePage = document.querySelector('.HomePage');

    const hpHeight = (window.innerHeight - 1);

    homePage.style.height = hpHeight + "px";
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
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")"
    };
    return (
      <div className={cx("HomePage overflow-hidden w100")}>
        <div className={cx("w100 bg-black flex justify-between ")}>

          <div className={cx("p1 relative")}>
            <h1 className={cx("HomePage__headline title-sans-serif color-white")}>{this.props.firstName}</h1>
            <h1 className={cx("HomePage__headline HomePage__headline--last-name title-sans-serif color-white absolute ml1")}>{this.props.lastName}</h1>
          </div>

          <div className={cx("p1")}>
            <h2 className={cx("HomePage__sub-headline title-sans-serif color-white")}>
              producer
            </h2>
            <h2 className={cx("HomePage__sub-headline title-sans-serif color-white")}>
              engineer
            </h2>
            <h2 className={cx("HomePage__sub-headline title-sans-serif color-white")}>
              songwriter 
            </h2>

          </div>
        </div>

        {/* <div style={backgroundImage} className={cx("col-6 h100 bg-cover")}></div>
        <div className={cx("col-6 h100")}></div> */}

        {this.props.projects.map((project, key) => {
          return <div key={key}>
            <ProjectCard
              id={project.id}
              title={project.title}
            ></ProjectCard>
          </div>;
        })}
      </div>
    )
  }
}
