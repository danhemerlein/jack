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
      tunes: this.props.tunes,
      activeIndex: 0,
      duration: '',
      timeElapsed: 0,
      activeTitle: '',
      muted: false,
      showHi: false,
      showStuff: false,
      showSubTitle: false,
      showStuffLike: false,
      showEmail: false,
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
    var audioPlayer = document.getElementById('audio-player')

    this.setState({
      activeIndex: index,
      activeTitle: this.state.tunes[index].fields.title,
    })

    audioPlayer.src = this.state.tunes[index].fields.audio.fields.file.url
    this.play()
  }

  initPlayer = (player) => {
    console.log(this.state.tunes[0].fields.audio.fields.file.url)
    player.src = this.state.tunes[0].fields.audio.fields.file.url

    this.setState({
      activeTitle: this.state.tunes[0].fields.title,
    })
  }

  play = () => {
    var audioPlayer = document.getElementById('audio-player')
    audioPlayer.play()
    this.updateTimeElapsed()
    this.setState({
      playingAudio: true,
    })
  }

  updateTimeElapsed = () => {
    var audioPlayer = document.getElementById('audio-player')
    setInterval(() => {
      this.setState({
        timeElapsed: audioPlayer.currentTime,
      })
    }, 100)
  }

  pause = () => {
    var audioPlayer = document.getElementById('audio-player')
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
    const lastSongIndex = this.state.tunes.length - 1

    if (this.state.activeIndex === lastSongIndex) {
      this.selectSong(0)
    } else {
      this.selectSong(nextSongIndex)
    }

    this.updateTimeElapsed()
  }

  prevSong = () => {
    const prevSongIndex = this.state.activeIndex - 1
    const lastSongIndex = this.state.tunes.length - 1

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
          className={cx('HomePage__texture-container w100 bg-light-black')}
          style={backgroundTexture}
        >
          <div className={cx('HomePage__header w100 flex justify-between')}>
            <div className={cx('HomePage__header--name')}>
              <div className={cx('p1 flex items-center flex-col')}>
                <h1 className={cx('HomePage__headline title-sans-serif')}>
                  <span
                    className={cx(
                      'HomePage__first-name inline-block  color-white'
                    )}
                  >
                    {this.props.firstName}
                  </span>
                  <span
                    className={cx(
                      'HomePage__last-name inline-block  color-white'
                    )}
                  >
                    &nbsp;{this.props.lastName}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className={cx('HomePage__body w100 flex')}>
            <div
              className={cx(
                'HomePage__body--info-container flex flex-col sm:flex-row'
              )}
            >
              <div
                className={cx(
                  'HomePage__body--image-desktop col-12 sm:col-6 bg-cover'
                )}
                style={backgroundImage}
              ></div>

              <img
                className={cx('HomePage__body--image-mobile col-12 sm:col-6')}
                src={imageURL}
                alt=''
              />

              <div
                className={cx(
                  'col-12 sm:col-6 p2 flex items-center justify-center sm:justify-start flex-col h100 none sm:block'
                )}
              >
                <div
                  className={cx(
                    'w100 text-center',
                    { 'block HomePage__hi': this.state.showHi === true },
                    { none: this.state.showHi === false }
                  )}
                >
                  <h2
                    className={cx(
                      'HomePage__sub-headline title-sans-serif color-white'
                    )}
                  >
                    Hi I'm Jack{' '}
                    <span role='img' aria-label=''>
                      👋
                    </span>
                  </h2>

                  <h2
                    className={cx(
                      'HomePage__sub-headline title-sans-serif color-white'
                    )}
                  >
                    I live in Queens{' '}
                    <span role='img' aria-label=''>
                      👑
                    </span>
                  </h2>
                </div>

                <div
                  className={cx(
                    'HomePage__body--bio-container flex flex-col w100'
                  )}
                >
                  <div className={cx('none sm:block')}>
                    <h2
                      className={cx(
                        'HomePage__sub-headline title-sans-serif color-white text-center'
                      )}
                    >
                      <span
                        className={cx(
                          'my3',
                          {
                            'block HomePage__hi': this.state.showStuff === true,
                          },
                          { none: this.state.showStuff === false }
                        )}
                      >
                        I do stuff like:
                      </span>
                    </h2>
                  </div>

                  <div className={cx('justify-around w100 none sm:flex')}>
                    <h2
                      className={cx(
                        'HomePage__sub-headline title-sans-serif color-white bold',
                        {
                          'block HomePage__hi':
                            this.state.showSubTitle === true,
                        },
                        { none: this.state.showSubTitle === false }
                      )}
                    >
                      {this.props.subTitleOne}
                    </h2>

                    <h2
                      className={cx(
                        'HomePage__sub-headline title-sans-serif color-white bold',
                        {
                          'block HomePage__hi':
                            this.state.showSubTitle === true,
                        },
                        { none: this.state.showSubTitle === false }
                      )}
                    >
                      {this.props.subTitleTwo}
                    </h2>
                  </div>

                  <div className={cx('justify-around w100 none sm:flex')}>
                    <h2
                      className={cx(
                        'HomePage__sub-headline title-sans-serif color-white bold',
                        {
                          'block HomePage__hi':
                            this.state.showSubTitle === true,
                        },
                        { none: this.state.showSubTitle === false }
                      )}
                    >
                      {this.props.subTitleThree}
                    </h2>

                    <h2
                      className={cx(
                        'HomePage__sub-headline title-sans-serif color-white bold',
                        {
                          'block HomePage__hi':
                            this.state.showSubTitle === true,
                        },
                        { none: this.state.showSubTitle === false }
                      )}
                    >
                      {this.props.subTitleFour}
                    </h2>
                  </div>

                  <h2
                    className={cx(
                      'HomePage__sub-headline title-sans-serif color-white text-center mt3',
                      {
                        'block HomePage__hi': this.state.showStuffLike === true,
                      },
                      { none: this.state.showStuffLike === false }
                    )}
                  >
                    to make stuff like this
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
                    className={cx(
                      'HomePage__body--link HomePage__body--link-desktop mt2 p_5 title-sans-serif text-center self-center',
                      {
                        'block HomePage__email': this.state.showEmail === true,
                      },
                      { none: this.state.showEmail === false }
                    )}
                    href='mailto:jacksonhoffmanmusic@gmail.com'
                  >
                    <span className={cx('')}>email me</span>
                  </a>
                </div>
              </div>

              <div
                className={cx(
                  'block sm:none p2 flex items-center flex-col justify-center'
                )}
              >
                <div className={cx('w100 text-center')}>
                  <h2
                    className={cx(
                      'HomePage__sub-headline title-sans-serif color-white'
                    )}
                  >
                    Hi I'm Jack{' '}
                    <span role='img' aria-label=''>
                      👋
                    </span>
                  </h2>

                  <h2
                    className={cx(
                      'HomePage__sub-headline title-sans-serif color-white'
                    )}
                  >
                    I live in Queens{' '}
                    <span role='img' aria-label=''>
                      👑
                    </span>
                  </h2>
                </div>

                <div className={cx('flex justify-between w100 mt2')}>
                  <h2
                    className={cx(
                      'HomePage__sub-headline title-sans-serif color-white bold'
                    )}
                  >
                    {this.props.subTitleOne}
                  </h2>

                  <h2
                    className={cx(
                      'HomePage__sub-headline title-sans-serif color-white bold'
                    )}
                  >
                    {this.props.subTitleTwo}
                  </h2>
                </div>

                <h3
                  className={cx(
                    'title-sans-serif my3 text-center color-white block sm:none'
                  )}
                >
                  {this.props.bio}
                </h3>

                <div className={cx('flex justify-between w100')}>
                  <h2
                    className={cx(
                      'HomePage__sub-headline title-sans-serif color-white bold'
                    )}
                  >
                    {this.props.subTitleThree}
                  </h2>
                  <h2
                    className={cx(
                      'HomePage__sub-headline title-sans-serif color-white bold'
                    )}
                  >
                    {this.props.subTitleFour}
                  </h2>
                </div>

                <a
                  className={cx(
                    'HomePage__body--link mt2 p_5  title-sans-serif col-4 text-center self-center'
                  )}
                  href='mailto:jacksonhoffmanmusic@gmail.com'
                >
                  <span>email me</span>
                </a>
              </div>
            </div>

            <div
              className={cx(
                'HomePage__body--projects-container flex flex-wrap'
              )}
            >
              {this.props.projects.map((project, key) => {
                return (
                  <div key={key} className={cx('col-12 sm:col-6')}>
                    <ProjectCard
                      id={project.id}
                      title={project.title}
                      artist={project.artist}
                      roles={project.roles}
                      clickHandler={this.projectCardClick}
                      image={this.props.artworkArray[key]}
                      cta={this.props.cta}
                    ></ProjectCard>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='HomePage__footer-desktop'>
            <div className={cx('HomePage__footer')}>
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
          <div className={cx('HomePage__footer')}>
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
