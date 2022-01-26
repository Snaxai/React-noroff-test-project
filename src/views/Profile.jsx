import { Link } from "react-router-dom"
import { useGuitars } from "../context/GuitarProvider"
import { useUser } from "../context/UserProvider"

const Profile = () => {
  const { guitars } = useGuitars()
  const { user } = useUser()

  const favGuitars = guitars.filter((guitar) => guitar.favourite)
  return (
    <>
      <Link to="/guitars">Guitars</Link>
      <h1>Welcome {user}</h1>
      {favGuitars && favGuitars.map((g) => <li key={g.id}>{g.model}</li>)}
    </>
  )
}

export default Profile
