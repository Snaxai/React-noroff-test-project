import React from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../context/UserProvider"

const LoginForm = () => {
  const navigate = useNavigate()

  const { user, setUser } = useUser()

  const handleUsernameChange = (event) => {
    // SyntheticEvent
    setUser(event.target.value.trim())
  }

  const handleLoginClick = () => {
    // Do something inter
    if (!user) {
      alert("No username provided")
    } else {
      console.log("Secure login")

      // Navigate with router
      navigate("/guitars")
    }
  }

  const items = [1, 2, 3, 4, 5]

  const handleItemClick = (item) => {
    console.log(item)
  }

  return (
    <>
      <h1>Login screen</h1>
      <input type="text" id="username" onChange={handleUsernameChange} />

      <footer>
        <button onClick={handleLoginClick}>Login</button>
      </footer>

      <br />

      <section>
        {items.map((item) => (
          <button key={item} onClick={() => handleItemClick(item)}>
            {item}
          </button>
        ))}
      </section>
    </>
  )
}

export default LoginForm
