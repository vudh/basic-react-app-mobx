import { Instance, types } from "mobx-state-tree"
import { createContext, useContext } from "react"
import MeetupStore from "./MeetupStore"

const RootModel = types.model({
  MeetupStore,
})
export const rootStore = RootModel.create({
  MeetupStore: {
    meetups: [],
    favorites: [],
  },
})
export type RootInstance = Instance<typeof RootModel>
export const RootStoreContext = createContext<null | RootInstance>(null)

export const RootStoreProvider = RootStoreContext.Provider

export const useStores = () => {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error("Store cannot be null, please add a context  provider")
  }
  return store
}
