import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkSection() {
  return (
    <div className='col-12 p2 flex items-center justify-center flex-col mb2 lg:mb0 title-sans-serif'>
      <p>
        <a
          href='https://www.instagram.com/jacksonhoffmanmusic/'
          target='_blank'
          rel='noopener noreferrer'
        >
          instagram
        </a>
      </p>
      <p className='mt1'>
        <a
          href='https://open.spotify.com/playlist/66DQy2mVH5QnVLc3O4lR62?si=FaBvit_HTw2BCHDxV4qrKQ'
          target='_blank'
          rel='noopener noreferrer'
        >
          spotify reel
        </a>
      </p>
      <p className='mt1'>
        <Link to='/sync-work'>sync work</Link>
      </p>
    </div>
  )
}
