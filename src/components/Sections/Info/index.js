import React from 'react'
import styled from 'styled-components'
import './Info.scss'

const StyledH2 = styled.h2`
  color: black;
  font-size: 1.5rem;
  text-align: center;
  display: inline-block;
`

export default function Info() {
  return (
    <div className='col-12 p1 flex items-center justify-center flex-col title-sans-serif'>
      <div className='w100 text-center block '>
        <StyledH2 className='HomePage__sub-headline '>
          Hi I'm Jack &nbsp;
          <span role='img' aria-label=''>
            👋
          </span>
        </StyledH2>

        <StyledH2 className='HomePage__sub-headline title-sans-serif mt1'>
          I live in Queens &nbsp;
          <span role='img' aria-label=''>
            👑
          </span>
          <span>&nbsp; and I'm a:</span>
        </StyledH2>
      </div>

      <div className='HomePage__body--bio-container flex flex-col w100'>
        <div className='w100 mt_5 flex justify-center'>
          <StyledH2>producer,&nbsp;</StyledH2>
          <StyledH2>engineer,&nbsp;</StyledH2>
          <StyledH2>songwriter &&nbsp;</StyledH2>
          <StyledH2>mixer</StyledH2>
        </div>

        <StyledH2 className='text-center mt1 block'>
          I make stuff like this
          <span className='none lg:inline-block' role='img' aria-label=''>
            &nbsp;⏩
          </span>
          <span className='inline-block lg:none' role='img' aria-label=''>
            &nbsp;⏬
          </span>
        </StyledH2>

        <a
          className='Info__email-button mt1 p_5 title-sans-serif text-center self-center block'
          href='mailto:jacksonhoffmanmusic@gmail.com'
        >
          <span>email me</span>
        </a>
      </div>
    </div>
  )
}
