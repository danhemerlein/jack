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
import ArrowIcon from 'components/icons/Arrow';

class MusicPlayer extends Component {

  componentDidMount() {
    var audioPlayer = document.getElementById("audio-player");
    this.props.initFunction(audioPlayer)

  }
  
  render() {

    return (
      <div className="MusicPlayer w100 h100 flex">
        <figure>
          <audio id="audio-player" preload="metadata"/>
        </figure>

        <div className="flex w100">

          <div className="MusicPlayer__icon-container flex items-center relative">

            <div className={cx("MusicPlayer__icon--arrow flex items-center h100 absolute l0", { 'MusicPlayer__icon--arrow-not-rotated': this.props.mobileControlsOpen === false }, { 'MusicPlayer__icon--arrow-rotated': this.props.mobileControlsOpen === true })}>

              <ArrowIcon

                clickHandler={this.props.toggleMobileAudioControls}

              ></ArrowIcon>

            </div>


            <div className="MusicPlayer__icon flex items-center h100">
            
              <RewindIcon

                clickHandler={this.props.prevSong}

              ></RewindIcon>

            </div>

            <div className={cx("MusicPlayer__icon flex items-center h100",
              { 'MusicPlayer__icon--audio-playing': this.props.playingAudio === true })}>

              <PlayIcon 
  
                clickHandler={this.props.play}
  
              ></PlayIcon>

            </div>

            <div className={cx("MusicPlayer__icon flex items-center h100",
              { 'MusicPlayer__icon--audio-playing': this.props.playingAudio === false })}>

              <PauseIcon
  
                clickHandler={this.props.pause}
  
              ></PauseIcon>

            </div>

            <div className="MusicPlayer__icon flex items-center h100">

              <FastForwardIcon
  
                id="next-song"
                clickHandler={this.props.nextSong}
  
              ></FastForwardIcon>

            </div>

            <div className="MusicPlayer__mute-unmute-container h100">
              <div className={cx("MusicPlayer__icon flex items-center h100", { 'flex': this.props.muted === false }, { 'none': this.props.muted === true })}>

                <MuteIcon

                  clickHandler={this.props.mute}

                ></MuteIcon>

              </div>

              <div className={cx("MusicPlayer__icon items-center h100", { 'flex': this.props.muted === true }, { 'none': this.props.muted === false })}>

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
