import React from 'react'
import styled from 'styled-components'
import './MobileInfo.scss'

const StyledH2 = styled.h2`
  color: white;
  font-size: 1.5rem;
`

export default function MobileInfo() {
  return (
    <div className='sm:none p2 flex items-center flex-col justify-center title-sans-serif'>
      <div className='w100 text-center'>
        <StyledH2>
          Hi I'm Jack &nbsp;
          <span role='img' aria-label=''>
            👋
          </span>
        </StyledH2>

        <StyledH2>
          I live in Queens &nbsp;
          <span role='img' aria-label=''>
            👑
          </span>
        </StyledH2>
      </div>

      <div className='flex justify-between w100 mt2'>
        <StyledH2>PRODUCER</StyledH2>

        <StyledH2>ENGINEER</StyledH2>
      </div>

      <h3 className='block sm:none my3 text-center color-white'>
        Hey I'm Jack. I live in Queens and I slang them hitz. Send me some
        electronic mail to get in touch if you bout it bout it.
      </h3>

      <div className='flex justify-between w100'>
        <StyledH2>SONGWRITER</StyledH2>
        <StyledH2>MIXER</StyledH2>
      </div>

      <a
        className='MobileInfo__email-button mt2 p_5 col-4 text-center self-center'
        href='mailto:jacksonhoffmanmusic@gmail.com'
      >
        <span>email me</span>
      </a>
    </div>
  )
}
