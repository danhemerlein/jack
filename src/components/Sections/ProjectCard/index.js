import cx from 'classnames'
import React, { Component } from 'react'
import Image from '../../components/base/Image'
import PlayIcon from '../../components/icons/Play'
import './ProjectCard.scss'

export default class ProjectCard extends Component {
  render() {
    const { roles, artwork, title, artist, id } = this.props
    console.log(artwork)

    let longRoles = false

    if (roles.split('/').length > 2) {
      longRoles = true
    }

    return (
      <div
        onClick={() => {
          this.props.clickHandler(id)
        }}
        className='ProjectCard flex items-center justify-center flex-col h100 w100'
      >
        <div className='ProjectCard__container relative h100 w100'>
          <div className='w100 h100 flex'>
            <Image src={artwork.fields.file.url} alt={artwork.fields.title} />
          </div>

          <div className='ProjectCard__overlay bg-white flex justify-center flex-col items-center absolute l0 t0 r0 b0'>
            <div className='bold title-sans-serif'>{title}</div>

            <div className='title-sans-serif'>by&nbsp;{artist}</div>

            <div
              className={cx(
                'mt1',
                { block: longRoles === true },
                { none: longRoles === false }
              )}
            >
              <div className='title-sans-serif'>
                {roles.split('/')[0]}/{roles.split('/')[1]}
              </div>

              <div className='title-sans-serif text-center'>
                {roles.split('/')[2]}
                <span
                  className={cx(
                    '',
                    {
                      'inline-block': roles.split('/').length === 4,
                    },
                    { none: roles.split('/').length !== 4 }
                  )}
                >
                  /
                </span>
                {roles.split('/')[3]}
              </div>
            </div>

            <div
              className={cx('title-sans-serif mt1', {
                none: longRoles === true,
              })}
            >
              {roles}
            </div>

            <div className='ProjectCard__svg-container mt2'>
              <PlayIcon></PlayIcon>
            </div>

            <div className='ProjectCard__CTA title-sans-serif mt2'>
              click to play
            </div>
          </div>
        </div>
      </div>
    )
  }
}
