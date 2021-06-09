import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledP = styled.p`
  font-size: 1.5rem;
`

export default function LinkSection() {
  return (
    <div className='col-12 p1 flex items-center justify-center flex-col mb2 lg:mb0 title-sans-serif'>
      <StyledP>
        <a
          href='https://www.instagram.com/jacksonhoffmanmusic/'
          target='_blank'
          rel='noopener noreferrer'
        >
          instagram
        </a>
      </StyledP>
      <StyledP className='mt_5'>
        <a
          href='https://open.spotify.com/playlist/66DQy2mVH5QnVLc3O4lR62?si=FaBvit_HTw2BCHDxV4qrKQ'
          target='_blank'
          rel='noopener noreferrer'
        >
          spotify reel
        </a>
      </StyledP>
      <StyledP className='mt_5'>
        <Link to='/sync-work'>sync work</Link>
      </StyledP>
    </div>
  )
}
