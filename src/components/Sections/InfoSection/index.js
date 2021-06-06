import React from 'react'
import Info from '../Info'
import Links from '../Links'
import './InfoSection.scss'

export default function InfoSection(props) {
  const { img } = props

  const styleObj = {
    backgroundImage: 'url(' + img.fields.file.url + ')',
  }

  return (
    <div className='w100 flex flex-col lg:flex-row lg:flex-wrap'>
      <div
        className='InfoSection__image-desktop mauto lg:m0 col-6'
        style={styleObj}
      ></div>

      <div className='lg:flex flex-col justify-around lg:col-6'>
        <Info />
        <Links />
      </div>
    </div>
  )
}
