import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './NotFound.scss'

const StyledHeadline = styled.h1`
  font-size: 2rem;
  color: black;
  font-family: sans-serif;
  text-align: center;
`

const StyledHeadlineTwo = styled.h2`
  font-size: 2rem;
  color: black;
  margin-top: 1rem;
  font-family: sans-serif;
  text-align: center;
`

export default function NotFound() {
  return (
    <div className='NotFound flex p2 flex-col justify-center items-center'>
      <StyledHeadline>this is a 404 page you might want to</StyledHeadline>
      <StyledHeadlineTwo>
        <Link to='/'>return home</Link>
      </StyledHeadlineTwo>
    </div>
  )
}
