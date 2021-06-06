import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkSection() {
  return (
    <div className='col-12 flex items-center justify-center flex-col'>
      <p className='title-sans-serif color-white'>
        <a
          href='https://www.instagram.com/jacksonhoffmanmusic/'
          target='_blank'
          rel='noopener noreferrer'
        >
          instagram
        </a>
      </p>
      <p className='title-sans-serif color-white mt1'>
        <a
          href='https://open.spotify.com/playlist/66DQy2mVH5QnVLc3O4lR62?si=FaBvit_HTw2BCHDxV4qrKQ'
          target='_blank'
          rel='noopener noreferrer'
        >
          spotify reel
        </a>
      </p>
      <p className='title-sans-serif color-white mt1'>
        <Link to='/sync-work'>sync work</Link>
      </p>
    </div>
  )
}
