import MeetupList from "../components/meetup/MeetupList"
import React, { useContext } from "react"
import { useStores } from "../store/RootStoreContext"
import { observer } from "mobx-react"

const FavoritesPage = observer(() => {
  const store = useStores()
  let content

  if (store.MeetupStore.favoritesCount === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  } else {
    content = <MeetupList meetups={store.MeetupStore.getFavoriteMeetupsFromStore} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
})

export default FavoritesPage
