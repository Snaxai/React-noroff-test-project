import React from "react"
import { Link } from "react-router-dom"
import GuitarList from "../components/GuitarList"

const Guitars = () => {
  return (
    <>
      <Link to="/profile">Profile</Link>
      <GuitarList />
    </>
  )
}

export default Guitars
