import React, { useEffect } from "react"
import { observer } from "mobx-react"

import MeetupList from "../components/meetup/MeetupList"
import { useStores } from "../store/RootStoreContext"

const AllMeetupsPage = observer(() => {
  const store = useStores()

  useEffect(() => {
    store.MeetupStore.loadMeetups()
  }, [])

  if (store.MeetupStore.isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={store.MeetupStore.meetups} />
    </section>
  )
})

export default AllMeetupsPage
