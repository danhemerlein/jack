import React, { Component } from "react";

import debounce from "utils/debounce";

import './HomePage.scss'
import cx from 'classnames';

import ProjectCard from 'components/ProjectCard';
import MusicPlayer from 'components/MusicPlayer';

export default class HomePage extends Component {

  setHeight = () => {
    const homePageBody = document.querySelector('.HomePage__body');
    const musicPlayer = document.querySelector('.MusicPlayer');
    const header = document.querySelector('.HomePage__header');
    const hpBodyHeight = (window.innerHeight - (musicPlayer.offsetHeight + header.offsetHeight));

    homePageBody.style.height = (hpBodyHeight - 2) + "px";
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
      <div className={cx("HomePage w100")}>
        <div className={cx("HomePage__header w100 bg-black flex justify-between ")}>

          <div className={cx("p1 relative")}>
            <h1 className={cx("HomePage__headline title-sans-serif color-white")}>{this.props.firstName}</h1>
            <h1 className={cx("HomePage__headline HomePage__headline--last-name title-sans-serif color-white absolute ml1")}>{this.props.lastName}</h1>
          </div>

          <div className={cx("p1")}>

            <h2 className={cx("HomePage__sub-headline title-sans-serif color-white")}>
              {this.props.subTitleOne}
            </h2>
            <h2 className={cx("HomePage__sub-headline title-sans-serif color-white")}>
              {this.props.subTitleTwo}
            </h2>
            <h2 className={cx("HomePage__sub-headline title-sans-serif color-white")}>
              {this.props.subTitleThree}
            </h2>

          </div>
        </div>

        <div className={cx("HomePage__body w100 flex")}>

          <div className={cx("col-6 flex")}>

            <div className={cx("col-6 h100 bg-cover")} style={backgroundImage}></div>

            <div className={cx("col-6 p2 flex justify-center items-center bg-black")}>

              <h3 className={cx("title-sans-serif text-center color-white")}>
              
                {this.props.bio}
              
              </h3>

            </div>

          </div>

          <div className={cx("HomePage__projects-container col-6 flex flex-wrap")}>

            {this.props.projects.map((project, key) => {
              return <div key={key} className={cx("col-6")}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                ></ProjectCard>
              </div>;
            })}

          </div>

        </div>


        <div className={cx("HomePage__footer")}>

          <MusicPlayer
            tunes={this.props.tunes}
          >
          </MusicPlayer>

        </div>

      </div>
    )
  }
}
