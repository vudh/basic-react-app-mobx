import React, { useRef, useState } from "react"
import Card from "../ui/Card"

import "../../assets/scss/components/meetup/NewMeetupForm.scss"
import { MeetupFormProps } from "types/MeetupFormProps"
import { IMeetup } from "types/IMeetup"

function NewMeetupForm(props: MeetupFormProps) {
  const [formData, setFormData] = useState<IMeetup | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    console.log(formData)
    if (props.onAddMeetup) props.onAddMeetup(formData as IMeetup)
  }

  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" onChange={handleForm} />
        </div>
        <div className="control">
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" onChange={handleForm} />
        </div>
        <div className="control">
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" onChange={handleForm} />
        </div>
        <div className="control">
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" onChange={handleForm}></textarea>
        </div>
        <div className="actions">
          <button disabled={formData === undefined ? true : false}>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
