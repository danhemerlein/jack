import cx from 'classnames'
import React, { Component } from 'react'
import MusicPlayer from '../../components/MusicPlayer'
import ProjectCard from '../../components/ProjectCard'
import { debounce, secondsToHms } from '../../utils'
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
      // showHi: false,
      // showStuff: false,
      // showSubTitle: false,
      // showStuffLike: false,
      // showEmail: false,
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

    console.log(index)

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

    var audioPlayer = document.getElementById('audio-player')
    audioPlayer.volume = 0
  }

  unMute = () => {
    this.setState({
      muted: false,
    })

    var audioPlayer = document.getElementById('audio-player')
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

    var audioPlayer = document.getElementById('audio-player')

    audioPlayer.addEventListener('ended', () => {
      clearInterval(this.updateTimeElapsed)

      this.nextSong()
    })

    this.duration(audioPlayer)

    setTimeout(() => {
      this.setState({
        showHi: true,
      })
    }, 1500)

    setTimeout(() => {
      this.setState({
        showStuff: true,
      })
    }, 2500)

    setTimeout(() => {
      this.setState({
        showSubTitle: true,
      })
    }, 3500)

    setTimeout(() => {
      this.setState({
        showStuffLike: true,
      })
    }, 4500)

    setTimeout(() => {
      this.setState({
        showEmail: true,
      })
    }, 6000)

    const liberalHand = new FontFace(
      'LiberalHandSans',
      `url(${this.props.font.fields.file.url})`
    )

    liberalHand
      .load()
      .then(function (loadedHand) {
        document.fonts.add(loadedHand)
        document.body.style.fontFamily = '"LiberalHandSans", sans-serif'
      })
      .catch(function (error) {
        console.error('an error occured while loading the font')
      })
  }

  render() {
    const backgroundImage = {
      backgroundImage:
        'url(' + this.props.backgroundImage.fields.file.url + ')',
    }

    const backgroundTexture = {
      backgroundImage:
        'url(' + this.props.backgroundTexture.fields.file.url + ')',
    }

    const imageURL = this.props.backgroundImage.fields.file.url

    return (
      <div className='HomePage relative'>
        <div
          className='HomePage__texture-container w100 bg-light-black'
          // style={backgroundTexture}
        >
          <div className='HomePage__header w100 flex justify-between'>
            <div className='HomePage__header--name'>
              <div className='p1 flex items-center flex-col'>
                <h1 className='HomePage__headline title-sans-serif'>
                  <span className='HomePage__first-name inline-block  color-white'>
                    JACKSON
                  </span>
                  <span className='HomePage__last-name inline-block color-white'>
                    &nbsp;HOFFMAN
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className='HomePage__body w100 flex'>
            <div className='HomePage__body--info-container flex flex-col'>
              <div
                className='HomePage__body--image-desktop col-12 bg-cover'
                style={backgroundImage}
              ></div>

              <img
                className='HomePage__body--image-mobile col-12 sm:col-6'
                src={imageURL}
                alt=''
              />

              <div className='col-12 p2 flex items-center justify-center sm:justify-start flex-col h100 none sm:block'>
                <div className='w100 text-center block HomePage__hi'>
                  <h2 className='HomePage__sub-headline title-sans-serif color-white'>
                    Hi I'm Jack &nbsp;
                    <span role='img' aria-label=''>
                      👋
                    </span>
                  </h2>

                  <h2 className='HomePage__sub-headline title-sans-serif color-white mt1'>
                    I live in Queens &nbsp;
                    <span role='img' aria-label=''>
                      👑
                    </span>
                    <span>&nbsp; and I'm a</span>
                  </h2>
                </div>

                <div className='HomePage__body--bio-container flex flex-col w100'>
                  <div className='justify-around w100 none sm:flex mt1'>
                    <h2 className='HomePage__sub-headline HomePage__hi block title-sans-serif color-white bold'>
                      PRODUCER
                    </h2>

                    <h2 className='HomePage__sub-headline HomePage__hi block title-sans-serif color-white bold'>
                      ENGINEER
                    </h2>
                  </div>

                  <div className='justify-around w100 none sm:flex'>
                    <h2 className='HomePage__sub-headline HomePage__hi block title-sans-serif color-white bold'>
                      SONGWRITER
                    </h2>

                    <h2 className='HomePage__sub-headline HomePage__hi block title-sans-serif color-white bold'>
                      MIXER
                    </h2>
                  </div>

                  <h2 className='HomePage__sub-headline title-sans-serif color-white text-center mt1 block HomePage__hi'>
                    i make stuff like this
                    <span
                      className='none lg:inline-block'
                      role='img'
                      aria-label=''
                    >
                      &nbsp;⏩
                    </span>
                    <span
                      className='inline-block lg:none'
                      role='img'
                      aria-label=''
                    >
                      &nbsp;⏬
                    </span>
                  </h2>

                  <a
                    className='HomePage__body--link HomePage__body--link-desktop mt2 p_5 title-sans-serif text-center self-center block HomePage__email'
                    href='mailto:jacksonhoffmanmusic@gmail.com'
                  >
                    <span>email me</span>
                  </a>
                </div>
              </div>

              <div
                className={cx(
                  'block sm:none p2 flex items-center flex-col justify-center'
                )}
              >
                <div className='w100 text-center'>
                  <h2 className='HomePage__sub-headline title-sans-serif color-white'>
                    Hi I'm Jack &nbsp;
                    <span role='img' aria-label=''>
                      👋
                    </span>
                  </h2>

                  <h2 className='HomePage__sub-headline title-sans-serif color-white'>
                    I live in Queens &nbsp;
                    <span role='img' aria-label=''>
                      👑
                    </span>
                  </h2>
                </div>

                <div className='flex justify-between w100 mt2'>
                  <h2 className='HomePage__sub-headline title-sans-serif color-white bold'>
                    PRODUCER
                  </h2>

                  <h2 className='HomePage__sub-headline title-sans-serif color-white bold'>
                    ENGINEER
                  </h2>
                </div>

                <h3 className='title-sans-serif my3 text-center color-white block sm:none'>
                  Hey I'm Jack. I live in Queens and I slang them hitz. Send me
                  some electronic mail to get in touch if you bout it bout it.
                </h3>

                <div className='flex justify-between w100'>
                  <h2 className='HomePage__sub-headline title-sans-serif color-white bold'>
                    SONGWRITER
                  </h2>
                  <h2 className='HomePage__sub-headline title-sans-serif color-white bold'>
                    MIXER
                  </h2>
                </div>

                <a
                  className='HomePage__body--link mt2 p_5  title-sans-serif col-4 text-center self-center'
                  href='mailto:jacksonhoffmanmusic@gmail.com'
                >
                  <span>email me</span>
                </a>
              </div>
            </div>

            <div className='HomePage__body--projects-container flex flex-wrap'>
              {this.props.songs.map((song, key) => {
                const { id, title, artist, roles } = song.fields
                return (
                  <div key={key} className='col-12 sm:col-4'>
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
