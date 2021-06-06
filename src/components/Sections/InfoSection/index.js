import React from 'react'
import DesktopInfo from '../DesktopInfo'
import LinkSection from '../Links'
import MobileInfo from '../MobileInfo'
import './InfoSection.scss'

export default function InfoSection(props) {
  const { img } = props

  const styleObj = {
    backgroundImage: 'url(' + img.fields.file.url + ')',
  }

  return (
    <>
      <div className='InfoSection__image-desktop col-6' style={styleObj}></div>

      <LinkSection />

      <img
        className='InfoSection__image-mobile col-12 sm:col-6'
        src={img.fields.file.url}
        alt=''
      />

      <DesktopInfo />

      <MobileInfo />
    </>
  )
}
