import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import NewMeetupForm from "../components/meetup/NewMeetupForm"
import { useStores } from "../store/RootStoreContext"

function NewMeetupPage() {
  const history = useHistory()
  const store = useStores()

  const addMeetupHandler = (meetupData) => {
    store.MeetupStore.addMeetup(meetupData).then(() => {
      history.replace("/")
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage
