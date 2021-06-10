import React from 'react'
import { Link } from 'react-router-dom'
import './HeroHeadline.scss'

export default function HeroHeadline() {
  return (
    <div className='HomePage__header w100 flex justify-between pt2 lg:pt0'>
      <div className='p1 flex items-center flex-col w100'>
        <h1 className='title-sans-serif'>
          <Link to='/'>
            <span className='HeroHeadline__first-name inline-block color-black'>
              JACKSON
            </span>
            <span className='HeroHeadline__last-name inline-block color-black'>
              &nbsp;HOFFMAN
            </span>
          </Link>
        </h1>
      </div>
    </div>
  )
}
