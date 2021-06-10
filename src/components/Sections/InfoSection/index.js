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
      <img
        className='block md:none col-8 mauto'
        src={img.fields.file.url}
        alt='Jackson Hoffman headshot in an outdoor setting.'
      />
      <div
        className='InfoSection__image-desktop none md:block mauto lg:m0 col-6'
        style={styleObj}
      ></div>

      <div className='lg:flex flex-col justify-center lg:col-6'>
        <Info />
        <Links />
      </div>
    </div>
  )
}
