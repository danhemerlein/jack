import React from 'react'
import DesktopInfo from './DesktopInfo'
import LinkSection from './Links'
import MobileInfo from './MobileInfo'

export default function InfoSection({ props }) {
  const { image } = props

  const styleObj = {
    backgroundImage: 'url(' + image.fields.file.url + ')',
  }

  return (
    <>
      <div
        className='HomePage__body--image-desktop col-6'
        style={styleObj}
      ></div>

      <LinkSection />

      <img
        className='HomePage__body--image-mobile col-12 sm:col-6'
        src={image.fields.file.url}
        alt=''
      />

      <DesktopInfo />

      <MobileInfo />
    </>
  )
}
