import * as React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { RootStoreProvider } from "./store/RootStoreContext"

import App from "./App"
import { rootStore } from "./store/RootStoreContext"

const rootEl = document.getElementById("root")

render(
  <RootStoreProvider value={rootStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RootStoreProvider>,
  rootEl,
)
