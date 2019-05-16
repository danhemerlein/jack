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

  componentDidMount() {
    var audioPlayer = document.getElementById("audio-player");
    this.props.initFunction(audioPlayer)
  }
  
  render() {

    return (
      <div className="MusicPlayer w100 h100 flex bg-black color-white">
        <figure>
          <audio id="audio-player" preload="metadata"/>
        </figure>

        <div className="flex w100">

          <div className="MusicPlayer__icon-container col-3 flex items-center justify-center">
          
            <RewindIcon
              clickHandler={this.props.prevSong}
            ></RewindIcon>
            <PlayIcon 
              clickHandler={this.props.play}
            ></PlayIcon>
            <PauseIcon
              clickHandler={this.props.pause}
            ></PauseIcon>
            <FastForwardIcon
              id="next-song"
              clickHandler={this.props.nextSong}
            ></FastForwardIcon>

            <div className="ml1">
              <div className={cx({ 'block': this.props.muted === false }, { 'none': this.props.muted === true })}>
                <MuteIcon
                  clickHandler={this.props.mute}
                ></MuteIcon>
              </div>

              <div className={cx({ 'block': this.props.muted === true }, { 'none': this.props.muted === false })}>
                <SoundOnIcon
                  clickHandler={this.props.unMute}
                ></SoundOnIcon>
              </div>
            </div>

          </div>

          <div className={cx("MusicPlayer__data-container flex items-center justify-center")}>

            <div className="MusicPlayer__data-container--duration col-3">
              <span className={cx("title-sans-serif")}>{secondsToHms(this.props.timeElapsed)}</span>
              <span className={cx("mx_5 title-sans-serif")}>|</span>
              <span className={cx("mr_5 title-sans-serif")}>{this.props.duration}</span>
            </div>

            <div className="col-9">
              <span className={cx("title-sans-serif")}>{this.props.activeTitle}</span>
            </div>
            
          </div>

        </div>

      </div>
    );
  }
}

export default MusicPlayer;
