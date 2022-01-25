import React, { useEffect, useState } from "react"

const Username = () => {
  // Local states
  const [username, setUsername] = useState()

  const handleUsernameChange = (event) => {
    // SyntheticEvent
    setUsername(event.target.value.trim())
  }

  useEffect(() => {
    setUsername("Hva du vil")
  }, [])

  return (
    <div>
      <input type="text" id="username" onChange={handleUsernameChange} />
      <p>{username}</p>
    </div>
  )
}

export default Username
