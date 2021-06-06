import cx from 'classnames'
import React, { Component } from 'react'
import { debounce, secondsToHms } from '../../../utils'
import InfoSection from '../../InfoSection'
import MusicPlayer from '../../MusicPlayer'
import ProjectCard from '../../ProjectCard'
import HeroHeadline from '../../Sections/HeroHeadline'
import './HomePage.scss'

export default class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: this.props.songs,
      activeIndex: 0,
      duration: '',
      timeElapsed: 0,
      activeTitle: '',
      muted: false,
      showMobileControls: false,
      playingAudio: undefined,
    }
  }

  setHeight = () => {
    const homePageBody = document.querySelector('.HomePage__body')
    const musicPlayer = document.querySelector('.MusicPlayer')
    const header = document.querySelector('.HomePage__header')

    const hpBodyHeight =
      window.innerHeight - (musicPlayer.offsetHeight + header.offsetHeight)

    homePageBody.style.height = hpBodyHeight + 'px'
  }

  debounceAPHeight = () => {
    debounce(this.setHeight(), 100)
  }

  projectCardClick = (index) => {
    this.selectSong(index)
  }

  selectSong = (index) => {
    const audioPlayer = document.getElementById('audio-player')

    this.setState({
      activeIndex: index,
      activeTitle: this.state.songs[index].fields.title,
    })

    audioPlayer.src = this.state.songs[index].fields.audio.fields.file.url
    this.play()
  }

  initPlayer = (player) => {
    player.src = this.state.songs[0].fields.audio.fields.file.url

    this.setState({
      activeTitle: this.state.songs[0].fields.title,
    })
  }

  play = () => {
    const audioPlayer = document.getElementById('audio-player')
    audioPlayer.play()
    this.updateTimeElapsed()
    this.setState({
      playingAudio: true,
    })
  }

  updateTimeElapsed = () => {
    const audioPlayer = document.getElementById('audio-player')
    setInterval(() => {
      this.setState({
        timeElapsed: audioPlayer.currentTime,
      })
    }, 100)
  }

  pause = () => {
    const audioPlayer = document.getElementById('audio-player')
    audioPlayer.pause()

    this.setState({
      playingAudio: false,
    })
  }

  mute = () => {
    this.setState({
      muted: true,
    })

    const audioPlayer = document.getElementById('audio-player')
    audioPlayer.volume = 0
  }

  unMute = () => {
    this.setState({
      muted: false,
    })

    const audioPlayer = document.getElementById('audio-player')
    audioPlayer.volume = 1
  }

  duration = (player) => {
    player.onloadedmetadata = () => {
      const formatedTime = secondsToHms(String(player.duration))
      this.setState({
        duration: formatedTime,
      })
    }
  }

  nextSong = () => {
    const nextSongIndex = this.state.activeIndex + 1
    const lastSongIndex = this.state.songs.length - 1

    if (this.state.activeIndex === lastSongIndex) {
      this.selectSong(0)
    } else {
      this.selectSong(nextSongIndex)
    }

    this.updateTimeElapsed()
  }

  prevSong = () => {
    const prevSongIndex = this.state.activeIndex - 1
    const lastSongIndex = this.state.songs.length - 1

    if (this.state.activeIndex === 0) {
      this.selectSong(lastSongIndex)
    } else {
      this.selectSong(prevSongIndex)
    }

    this.updateTimeElapsed()
  }

  toggleMobileAudioControls = () => {
    this.setState({
      showMobileControls: !this.state.showMobileControls,
    })
  }

  componentDidMount() {
    const homePageBody = document.querySelector('.HomePage__body')

    if (window.innerWidth > 1024) {
      this.setHeight()
    } else {
      homePageBody.style.height = 'auto'
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        this.setHeight()
      } else {
        homePageBody.style.height = 'auto'
      }
    })

    const audioPlayer = document.getElementById('audio-player')

    audioPlayer.addEventListener('ended', () => {
      clearInterval(this.updateTimeElapsed)

      this.nextSong()
    })

    this.duration(audioPlayer)
  }

  render() {
    const backgroundTexture = {
      backgroundImage:
        'url(' + this.props.backgroundTexture.fields.file.url + ')',
    }

    return (
      <div className='HomePage relative'>
        <div
          className='HomePage__texture-container w100 bg-light-black'
          // style={backgroundTexture}
        >
          <HeroHeadline />

          <div className='HomePage__body w100 flex'>
            <div className='HomePage__body--info-container flex flex-wrap '>
              <InfoSection image={this.props.backgroundImage} />
            </div>

            <div className='HomePage__body--projects-container flex flex-wrap'>
              {this.props.songs.map((song, key) => {
                const { title, artist, roles } = song.fields
                return (
                  <div key={title} className='col-12 sm:col-4'>
                    <ProjectCard
                      id={key}
                      title={title}
                      artist={artist}
                      roles={roles}
                      clickHandler={this.projectCardClick}
                      artwork={song.fields.artwork}
                    ></ProjectCard>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='HomePage__footer-desktop'>
            <div className={cx('HomePage__footer')}>
              <MusicPlayer
                songs={this.props.songs}
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
                playingAudio={this.state.playingAudio}
              ></MusicPlayer>
            </div>
          </div>
        </div>

        <div
          className={cx(
            'HomePage__footer-mobile',
            {
              'HomePage__footer-mobile--show':
                this.state.showMobileControls === true,
            },
            {
              'HomePage__footer-mobile--hide':
                this.state.showMobileControls === false,
            }
          )}
        >
          <div className='HomePage__footer'>
            <MusicPlayer
              songs={this.props.songs}
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
              toggleMobileAudioControls={this.toggleMobileAudioControls}
              mobileControlsOpen={this.state.showMobileControls}
              playingAudio={this.state.playingAudio}
            ></MusicPlayer>
          </div>
        </div>
      </div>
    )
  }
}
