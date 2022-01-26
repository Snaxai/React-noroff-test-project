import { createContext, useContext, useEffect, useState } from "react"
import { apiFetchAllGuitars } from "../api/guitars"

const GuitarContext = createContext()

export const useGuitars = () => {
  return useContext(GuitarContext)
}

const GuitarProvider = (props) => {
  const [guitars, setGuitars] = useState([])

  const favouriteGuitar = (guitarId) => {
    const guitarsCopy = [...guitars].map((_guitar) => {
      if (_guitar.id === guitarId) {
        _guitar.favourite = !_guitar.favourite
      }
      return _guitar
    })
    setGuitars(guitarsCopy) // Force re-render
  }

  const fetchGuitars = () => {
    apiFetchAllGuitars().then((_guitars) => {
      setGuitars(_guitars)
    })
  }

  useEffect(() => {
    fetchGuitars()
  }, [])

  const GuitarState = {
    guitars,
    setGuitars,
    favouriteGuitar,
  }

  return (
    <GuitarContext.Provider value={GuitarState}>
      {props.children}
    </GuitarContext.Provider>
  )
}
export default GuitarProvider
