import React from 'react'
import { Link } from 'react-router-dom'
import './HeroHeadline.scss'

export default function HeroHeadline() {
  return (
    <div className='HomePage__header w100 flex justify-between'>
      <div className='p1 flex items-center flex-col w100'>
        <h1 className='title-sans-serif'>
          <Link to='/'>
            <span className='HeroHeadline__first-name inline-block color-white'>
              JACKSON
            </span>
            <span className='HeroHeadline__last-name inline-block color-white'>
              &nbsp;HOFFMAN
            </span>
          </Link>
        </h1>
      </div>
    </div>
  )
}
