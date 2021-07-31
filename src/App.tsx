import { Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader"

import AllMeetupsPage from "./pages/AllMeetups"
import NewMeetupPage from "./pages/NewMeetup"
import FavoritesPage from "./pages/Favorites"

import MainNavigation from "./components/layout/MainNavigation"

import React from "react"

import "./assets/scss/App.scss"

const App = () => {
  return (
    <div>
      <MainNavigation />
      <div className="page-wrapper">
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

declare let module: Record<string, unknown>

export default hot(module)(App)
