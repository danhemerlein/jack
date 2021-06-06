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
        className='InfoSection__image-desktop col-4 mauto lg:m0 lg:col-6'
        style={styleObj}
      ></div>

      <div className='lg:flex flex-col justify-around lg:col-6'>
        <Links />

        <Info />
      </div>
    </div>
  )
}
