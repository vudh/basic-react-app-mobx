import React from "react"
import { useStores } from "../../store/RootStoreContext"

import "../../assets/scss/components/meetup/MeetupItem.scss"
import { MeetupItemProps } from "types/MeetupItemProps"
import { observer } from "mobx-react"

const MeetupItem = observer((props: MeetupItemProps) => {
  const store = useStores()

  const itemIsFavorite = store.MeetupStore.favorites.includes(props.item?.id)

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      store.MeetupStore.removeFavorite(props.item?.id)
    } else {
      store.MeetupStore.addFavorite(props.item?.id)
    }
  }

  const removeMeetup = (e) => {
    e.preventDefault()

    if (props.onRemoveMeetup) props.onRemoveMeetup(props.item?.id)
  }

  return (
    <li className="item">
      <div className="image">
        <img src={props.item?.image} alt={props.item?.title} />
      </div>
      <div className="content">
        <h3>{props.item?.title}</h3>
        <address>{props.item?.address}</address>
        <p>{props.item?.description}</p>
      </div>
      <div className="actions">
        <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove from Favorites" : "Add To Favorites"}</button>
        <button onClick={removeMeetup}>Remove</button>
      </div>
    </li>
  )
})

export default MeetupItem
