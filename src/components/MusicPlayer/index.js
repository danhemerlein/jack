import React, { Component } from 'react';

import './MusicPlayer.scss';
import cx from "classnames";

import secondsToHms from "utils/secondsToHms";

import PlayIcon from 'components/icons/Play';
import PauseIcon from 'components/icons/Pause';
import RewindIcon from 'components/icons/Rewind';
import FastForwardIcon from 'components/icons/FastForward';
import MuteIcon from 'components/icons/Mute';
import SoundOnIcon from 'components/icons/SoundOn';

class MusicPlayer extends Component {
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

  selectSong = (index) => {
    var audioPlayer = document.getElementById("audio-player");

    this.setState({
      activeIndex: index,
      activeTitle: this.state.tunes[index].fields.title,
    })

    audioPlayer.src = this.state.tunes[index].fields.file.url;
    audioPlayer.play();
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

    console.log(this.state.muted);
    
    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.volume = 0;
  }
  
  unMute = () => {
    this.setState({
      muted: false
    })
    
    console.log(this.state.muted);

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

  }

  componentDidMount = () => {

    console.log(this.state.muted);

    var audioPlayer = document.getElementById("audio-player");
    this.initPlayer(audioPlayer);

    audioPlayer.addEventListener('ended', () => {

      clearInterval(this.updateTimeElapsed);

      this.nextSong();

    })

    this.duration(audioPlayer);

  };

  render() {

    return (
      <div className="MusicPlayer w100 h100 flex bg-black color-white">
        <figure>
          <audio id="audio-player" preload="metadata"/>
        </figure>

        <div className="flex w100">

          <div className="MusicPlayer__icon-container col-3 flex items-center justify-center">
          
            <RewindIcon
              clickHandler={this.prevSong}
            ></RewindIcon>
            <PlayIcon 
              clickHandler={this.play}
            ></PlayIcon>
            <PauseIcon
              clickHandler={this.pause}
            ></PauseIcon>
            <FastForwardIcon
              id="next-song"
              clickHandler={this.nextSong}
            ></FastForwardIcon>

            <div className="ml1">
              <div className={cx({ 'block': this.state.muted === false }, { 'none': this.state.muted === true })}>
                <MuteIcon
                  clickHandler={this.mute}
                ></MuteIcon>
              </div>

              <div className={cx({ 'block': this.state.muted === true }, { 'none': this.state.muted === false })}>
                <SoundOnIcon
                  clickHandler={this.unMute}
                ></SoundOnIcon>
              </div>
            </div>

          </div>

          <div className={cx("MusicPlayer__data-container flex items-center justify-center col-6")}>

            <div className="MusicPlayer__data-container--duration col-3">
              <span className={cx("title-sans-serif")}>{secondsToHms(this.state.timeElapsed)}</span>
              <span className={cx("mx_5 title-sans-serif")}>|</span>
              <span className={cx("mr_5 title-sans-serif")}>{this.state.duration}</span>
            </div>

            <div className="col-9">
              <span className={cx("title-sans-serif")}>{this.state.activeTitle}</span>
            </div>
            
          </div>

        </div>

      </div>
    );
  }
}

export default MusicPlayer;
