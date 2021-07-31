import { MeetupBusiness } from "../businesses/MeetupBusiness"
import { IMeetup } from "types/IMeetup"

import { types, flow } from "mobx-state-tree"

const MeetupModel = types.model("MeetupModel").props({
  id: types.maybeNull(types.string),
  title: types.maybeNull(types.string),
  image: types.maybeNull(types.string),
  address: types.maybeNull(types.string),
  description: types.maybeNull(types.string),
})

const MeetupStore = types
  .model({
    meetups: types.optional(types.array(MeetupModel), []),
    favorites: types.array(types.string),
    isLoading: types.maybeNull(types.boolean),
  })
  .views((self) => ({
    get getFavoriteMeetupsFromStore() {
      return self.meetups.filter((x) => self.favorites.includes(x.id))
    },
    get favoritesCount() {
      return this.favorites.length
    },
  }))
  .actions((self) => ({
    loadMeetups: flow(function* () {
      self.isLoading = true
      self.meetups = yield MeetupBusiness.loadMeetups()
      self.isLoading = false
    }),
    addMeetup: flow(function* (meetup: IMeetup) {
      self.isLoading = true
      yield MeetupBusiness.addMeetup(meetup)
      self.isLoading = false
    }),
    addFavorite(item: string) {
      self.favorites.push(item)
    },
    removeFavorite(item: string) {
      self.favorites.splice(self.favorites.indexOf(item), 1)
    },
  }))
export default MeetupStore
