import React from 'react'
import HeroHeadline from '../../sections/HeroHeadline'
import './SyncPage.scss'

export default function SyncPage() {
  return (
    <div className='SyncPage p2'>
      <HeroHeadline />
      <iframe
        className='SyncPage__iframe col-12 md:col-6 pb1 md:pb0 md:pr_5'
        title='Kevin Hart Presents the MVP Award! | 2021 NFL Honors'
        src='https://www.youtube.com/embed/jMPU_LyoZVY'
        frameBorder='0'
        allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen='allowfullscreen'
        mozallowfullscreen='mozallowfullscreen'
        msallowfullscreen='msallowfullscreen'
        oallowfullscreen='oallowfullscreen'
        webkitallowfullscreen='webkitallowfullscreen'
      ></iframe>

      <iframe
        className='SyncPage__iframe col-12 md:col-6 md:pl_5'
        title='Mom Time: FAGE Total Split Cups (Full Length)'
        src='https://www.youtube.com/embed/QbNprJAOM3Y'
        frameBorder='0'
        allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen='allowfullscreen'
        mozallowfullscreen='mozallowfullscreen'
        msallowfullscreen='msallowfullscreen'
        oallowfullscreen='oallowfullscreen'
        webkitallowfullscreen='webkitallowfullscreen'
      ></iframe>
    </div>
  )
}
