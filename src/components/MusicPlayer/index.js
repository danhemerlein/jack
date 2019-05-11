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
    };

  }

  selectSong = (index) => {
    var audioPlayer = document.getElementById("audio-player");

    this.setState({
      activeIndex: index,
    })

    audioPlayer.src = this.state.tunes[index].fields.file.url;
    audioPlayer.play();
  };

  initPlayer = (player) => {
    player.src = this.state.tunes[0].fields.file.url;
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
    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.volume = 0;
  }
  
  unMute = () => {
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
      <div className="MusicPlayer w100 h100 flex">
        <figure>
          <audio id="audio-player" preload="metadata"/>
        </figure>

        <div className="pl1">
        
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
          <MuteIcon
            clickHandler={this.mute}
          ></MuteIcon>
          <SoundOnIcon
            clickHandler={this.unMute}
          ></SoundOnIcon>

        </div>

        <div>

          <span className={cx("mr_5")}>{secondsToHms(this.state.timeElapsed)}</span>
          <span>{this.state.duration}</span>
        </div>

      </div>
    );
  }
}

export default MusicPlayer;
