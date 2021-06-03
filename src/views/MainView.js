import React from 'react'
import HomePage from '../components/HomePage'
import { get } from '../utils'

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>
  let homePage = []
  let music = []
  for (let i = 0; i < model.length; i++) {
    const element = model[i]

    if ('artist' in element.fields) {
      music.push(element)
    } else {
      homePage = element
    }
  }

  console.log('music', music)

  return (
    <div className='MainView'>
      <HomePage
        backgroundImage={get(homePage, 'fields.backgroundImage', {})}
        songs={music}
        font={get(homePage, 'fields.font')}
        backgroundTexture={get(homePage, 'fields.backgroundTexture')}
      ></HomePage>
    </div>
  )
}

export default MainView
