import React, { useEffect, useState } from "react"

const GuitarList = () => {
  const [guitars, setGuitars] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchGuitars = () => {
    fetch("https://dce-noroff-api.herokuapp.com/guitars")
      .then((response) => response.json())
      .then((_guitars) => {
        setGuitars(_guitars)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchGuitars()
  }, [])

  return (
    <>
      <h1>Guitars</h1>
      {loading && <p>Loading guitars... </p>}
      <ul>
        {guitars.map((guitar) => (
          <li key={guitar.id}>{guitar.model}</li>
        ))}
      </ul>
    </>
  )
}

export default GuitarList
