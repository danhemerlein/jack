import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../components/pages/HomePage'
import NotFound from '../components/pages/NotFound'
import SyncPage from '../components/pages/SyncPage'
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

  songs.sort((a, b) => {
    return a.fields.order - b.fields.order
  })

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <HomePage
                heroImage={get(homePage, 'fields.backgroundImage', {})}
                songs={songs}
              />
            )}
          />
          <Route exact path='/sync-work' render={() => <SyncPage />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Router>
    </>
  )
}

export default MainView
