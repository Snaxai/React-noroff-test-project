import React, { useState } from "react"
import { useGuitars } from "../context/GuitarProvider"
import GuitarListItem from "./GuitarListItem"

const GuitarList = () => {
  const { guitars, favouriteGuitar } = useGuitars()
  const [loading, setLoading] = useState(true)

  const onGuitarClick = (guitar) => {
    favouriteGuitar(guitar.id)
  }

  const totalFavourites = guitars.filter((guitar) => guitar.favourite).length

  return (
    <>
      <h1>Guitars</h1>
      <p>You have {totalFavourites} Favourites</p>
      <ul>
        {guitars.map((guitar) => (
          <GuitarListItem
            key={guitar.id}
            guitar={guitar}
            onGuitarClick={onGuitarClick}
          />
        ))}
      </ul>
    </>
  )
}

export default GuitarList
