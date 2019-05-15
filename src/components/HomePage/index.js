import React, { Component } from "react";

import debounce from "utils/debounce";
import secondsToHms from "utils/secondsToHms";

import './HomePage.scss'
import cx from 'classnames';

import ProjectCard from 'components/ProjectCard';
import MusicPlayer from 'components/MusicPlayer';

import DottedLineIcon from 'components/icons/DottedLine';

export default class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tunes: this.props.tunes,
      activeIndex: 0,
      duration: "",
      timeElapsed: 0,
      activeTitle: "",
      muted: false,
    };

  }

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

  projectCardClick = (index) => {
    this.selectSong(index);
  }

  selectSong = (index) => {
    var audioPlayer = document.getElementById("audio-player");

    this.setState({
      activeIndex: index,
      activeTitle: this.state.tunes[index].fields.title,
    })

    audioPlayer.src = this.state.tunes[index].fields.file.url;
    this.play();
  };

  initPlayer = (player) => {
    player.src = this.state.tunes[0].fields.file.url;

    this.setState({
      activeTitle: this.state.tunes[0].fields.title,
    })
  }

  play = () => {
    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.play();
    this.updateTimeElapsed();
  }

  updateTimeElapsed = () => {

    var audioPlayer = document.getElementById("audio-player");
    setInterval(() => {
      this.setState({
        timeElapsed: audioPlayer.currentTime
      })
    }, 100);

  }

  pause = () => {
    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.pause();
  }

  mute = () => {
    this.setState({
      muted: true
    })

    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.volume = 0;
  }

  unMute = () => {
    this.setState({
      muted: false
    })

    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.volume = 1;
  }

  duration = (player) => {
    player.onloadedmetadata = () => {
      const formatedTime = secondsToHms(String(player.duration));
      this.setState({
        duration: formatedTime,
      })
    };
  }

  nextSong = () => {
    const nextSongIndex = (this.state.activeIndex + 1);
    const lastSongIndex = (this.state.tunes.length - 1);

    if (this.state.activeIndex === lastSongIndex) {
      this.selectSong(0);
    } else {
      this.selectSong(nextSongIndex);
    }

    this.updateTimeElapsed();
  }

  prevSong = () => {
    const prevSongIndex = (this.state.activeIndex - 1);
    const lastSongIndex = (this.state.tunes.length - 1);

    if (this.state.activeIndex === 0) {
      this.selectSong(lastSongIndex);
    } else {
      this.selectSong(prevSongIndex);
    }

    this.updateTimeElapsed();

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

    var audioPlayer = document.getElementById("audio-player");

    audioPlayer.addEventListener('ended', () => {

      clearInterval(this.updateTimeElapsed);

      this.nextSong();

    })

    this.duration(audioPlayer);
  }

  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")"
    };

    const imageURL = this.props.backgroundImage.fields.file.url;

    // const cardHeight = {
    //   height: "300px"
    // }

    return (
      <div className={cx("HomePage w100")}>
        <div className={cx("HomePage__header w100 bg-black flex justify-between ")}>

          <div className={cx("HomePage__header--name")}>
            <div className={cx("p1 flex items-center flex-col")}>
              {/* <h1 className={cx("HomePage__headline title-sans-serif color-white")}>{this.props.firstName}</h1>
              <h1 className={cx("HomePage__headline title-sans-serif color-white ml2")}>{this.props.lastName}</h1> */}
              <h1 className={cx("HomePage__headline title-sans-serif color-white")}>{this.props.firstName}&nbsp;{this.props.lastName}</h1>
            </div>            
          </div>

          {/* <div className={cx("HomePage__header--roles p1 col-6 justify-around items-end")}>

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
          </div> */}

        </div>

        <div className={cx("HomePage__body w100 flex")}>

          <div className={cx("HomePage__body--info-container flex flex-col sm:flex-row")}>

            <div className={cx("HomePage__body--image-desktop col-12 sm:col-6 bg-cover")} style={backgroundImage}></div>

            <img className={cx("HomePage__body--image-mobile col-12 sm:col-6")} src={imageURL} alt=""/>

            <div className={cx("col-12 sm:col-6 p2 flex items-center bg-black justify-center flex-col h100 relative")}>

              <div className={cx("HomePage__body--top-line absolute t0")}></div>

              <div className={cx("HomePage__body--bio-container flex flex-col")}>
              
                <div className={cx("flex justify-between w100 mb3")}>

                  <h2 className={cx("HomePage__sub-headline title-sans-serif color-white bold")}>
                    {this.props.subTitleOne}
                  </h2>

                  <h2 className={cx("HomePage__sub-headline title-sans-serif color-white bold")}>
                    {this.props.subTitleTwo}
                  </h2>

                </div>

                <h3 className={cx("title-sans-serif text-center color-white")}>
                
                  {this.props.bio}
                
                </h3>

                <div className={cx("flex justify-between w100 mt3")}>

                  <h2 className={cx("HomePage__sub-headline title-sans-serif color-white bold")}>
                    {this.props.subTitleThree}
                  </h2>
                  <h2 className={cx("HomePage__sub-headline title-sans-serif color-white bold")}>
                    {this.props.subTitleFour}
                  </h2>

                </div>

                <a className={cx("HomePage__body--link mt2 p_5 color-black title-sans-serif col-3 text-center self-center")} href="mailto:jacksonhoffmanmusic@gmail.com">

                  <span>email me</span>
                  
                </a>

              </div>

            </div>

          </div>

          <div className={cx("HomePage__body--projects-container flex flex-wrap")}>

            {this.props.projects.map((project, key) => {
              return <div key={key} className={cx("col-12 sm:col-6")}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  artist={project.artist}
                  roles={project.roles}
                  clickHandler={this.projectCardClick}
                  image={this.props.artworkArray[key]}
                  cta={this.props.cta}
                ></ProjectCard>
              </div>;
            })}

          </div>

        </div>


        <div className={cx("HomePage__footer")}>

          <MusicPlayer
            tunes={this.props.tunes}
            muted={this.state.muted}
            timeElapsed={this.state.timeElapsed}
            duration={this.state.duration}
            activeTitle={this.state.activeTitle}
            initFunction={this.initPlayer}
            prevSong={this.prevSong}
            play={this.play}
            pause={this.pause}
            nextSong={this.nextSong}
            mute={this.mute}
            unMute={this.unMute}
          >
          </MusicPlayer>

        </div>

      </div>
    )
  }
}
