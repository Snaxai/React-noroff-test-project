import React, { createContext, useContext, useState } from "react"

const UserContext = createContext()

export const useUser = () => {
  return useContext(UserContext)
}

const UserProvider = (props) => {
  const [user, setUser] = useState()
  const userState = {
    user,
    setUser,
  }
  return (
    <UserContext.Provider value={userState}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
