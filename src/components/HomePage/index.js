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
    
    homePageBody.style.height = (hpBodyHeight) + "px";
  }

  debounceAPHeight = () => {
    debounce(this.setHeight(), 100);
  }

  projectCardClick = () => {

  }

  componentDidMount() {
    const homePageBody = document.querySelector('.HomePage__body');
    var scale = window.devicePixelRatio * window.innerWidth;

    if ((scale / 2) > 1024) {
      this.setHeight();
    } else {
      homePageBody.style.height = "auto";
    }

    window.addEventListener("resize", () => {
      var scale = window.devicePixelRatio * window.innerWidth;

      if ((scale / 2) > 1024) {
        this.setHeight();
      } else {
        homePageBody.style.height = "auto";
      }
    });
  }

  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")"
    };

    const imageURL = this.props.backgroundImage.fields.file.url;

    return (
      <div className={cx("HomePage w100")}>
        <div className={cx("HomePage__header w100 bg-black flex justify-between ")}>

          <div className={cx("HomePage__header--name col-6")}>
            <div className={cx("p1 col-6 flex items-center flex-col")}>
              <h1 className={cx("HomePage__headline title-sans-serif color-white")}>{this.props.firstName}</h1>
              <h1 className={cx("HomePage__headline title-sans-serif color-white ml2")}>{this.props.lastName}</h1>
            </div>

            <div className={cx("col-6")}></div>
          </div>

          <div className={cx("HomePage__header--roles p1 col-6 flex justify-around items-end")}>

            <h2 className={cx("HomePage__sub-headline title-sans-serif color-white")}>
              {this.props.subTitleOne}
            </h2>
            <h2 className={cx("HomePage__sub-headline title-sans-serif color-white")}>
              {this.props.subTitleTwo}
            </h2>
            <h2 className={cx("HomePage__sub-headline title-sans-serif color-white")}>
              {this.props.subTitleThree}
            </h2>
            <h2 className={cx("HomePage__sub-headline title-sans-serif color-white")}>
              {this.props.subTitleFour}
            </h2>
          </div>
        </div>

        <div className={cx("HomePage__body w100 flex")}>

          <div className={cx("HomePage__body--info-container flex")}>

            <div className={cx("HomePage__body--image-desktop col-6 h100 bg-cover")} style={backgroundImage}></div>

            <img className={cx("HomePage__body--image-mobile col-6 h100")} src={imageURL} alt=""/>

            <div className={cx("col-6 p2 flex justify-center items-center bg-black flex-col")}>

              <h3 className={cx("title-sans-serif text-center color-white")}>
              
                {this.props.bio}
              
              </h3>

              <a className={cx("HomePage__body--link mt2 p_5 color-black title-sans-serif")} href="mailto:jacksonhoffmanmusic@gmail.com">

                <span>email me</span>
                
              </a>

            </div>

          </div>

          <div className={cx("HomePage__body--projects-container flex flex-wrap")}>

            {this.props.projects.map((project, key) => {
              return <div key={key} className={cx("col-6")}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  artist={project.artist}
                  roles={project.roles}
                  clickHandler={this.projectCardClick}
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
