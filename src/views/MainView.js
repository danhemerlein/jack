import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import SyncPage from '../components/SyncPage'
import { get } from '../utils'

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>there had been an error</h1>
  let homePage = []
  let songs = []
  for (let i = 0; i < model.length; i++) {
    const element = model[i]

    if ('artist' in element.fields) {
      songs.push(element)
    } else {
      homePage = element
    }
  }

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <HomePage
                backgroundImage={get(homePage, 'fields.backgroundImage', {})}
                songs={songs}
                font={get(homePage, 'fields.font')}
                backgroundTexture={get(homePage, 'fields.backgroundTexture')}
              />
            )}
          />
          <Route exact path='/sync' render={() => <SyncPage />} />
        </Switch>
      </Router>
    </>
  )
}

export default MainView
