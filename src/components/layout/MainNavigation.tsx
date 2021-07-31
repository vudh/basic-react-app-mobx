import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { useStores } from "../../store/RootStoreContext"

import "../../assets/scss/components/MainNavigation.scss"
import { observer } from "mobx-react"

const MainNavigation = observer(() => {
  const store = useStores()

  return (
    <header className="header">
      <div className="logo">React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className="badge">{store.MeetupStore.favoritesCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
})

export default MainNavigation
