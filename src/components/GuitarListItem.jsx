import React from "react"

const GuitarListItem = ({ guitar, onGuitarClick }) => {
  return (
    <li onClick={() => onGuitarClick(guitar)}>
      <img src={guitar.image} alt="" width={200} />
      <span>{guitar.model}</span>
      { guitar.favourite && <p>favourite</p>}
    </li>
  )
}

export default GuitarListItem
