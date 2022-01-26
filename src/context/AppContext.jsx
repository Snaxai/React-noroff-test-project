import React from "react"
import GuitarProvider from "./GuitarProvider"
import UserProvider from "./UserProvider"

const AppContext = (props) => {
  return (
    <UserProvider>
      <GuitarProvider>{props.children}</GuitarProvider>
    </UserProvider>
  )
}

export default AppContext
