import React, { useRef, useState } from "react"
import MeetupItem from "./MeetupItem"
import Modal from "../modal/Modal"

import "../../assets/scss/components/meetup/MeetupList.scss"

function MeetupList(props) {
  const [showModal, setShowModal] = useState(false)
  const currentMeetupId = useRef(null)

  const onRemoveMeetup = (id) => {
    setShowModal(true)
    currentMeetupId.current = id
  }
  const removeMeetup = () => {
    setShowModal(false)
  }

  return (
    <div>
      <ul className="list">
        {props.meetups.map((meetup) => (
          <MeetupItem key={meetup.id} item={meetup} onRemoveMeetup={onRemoveMeetup} />
        ))}
      </ul>
      <Modal text="Are you sure?" show={showModal} onClose={() => setShowModal(false)} onConfirm={removeMeetup} />
    </div>
  )
}

export default MeetupList
