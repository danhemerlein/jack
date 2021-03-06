import cx from 'classnames'
import React, { Component } from 'react'
import Image from '../../base/Image'
import './ProjectCard.scss'

export default class ProjectCard extends Component {
  render() {
    const { roles, artwork, title, artist, id } = this.props

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
            <p className='bold title-sans-serif text-center'>{title}</p>

            <p className='title-sans-serif'>by&nbsp;{artist}</p>

            <div
              className={cx(
                'mt1',
                { block: longRoles === true },
                { none: longRoles === false }
              )}
            >
              <p className='title-sans-serif'>
                {roles.split('/')[0]}/{roles.split('/')[1]}
              </p>

              <p className='title-sans-serif text-center'>
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
              </p>
            </div>

            <p
              className={cx('title-sans-serif mt1', {
                none: longRoles === true,
              })}
            >
              {roles}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
