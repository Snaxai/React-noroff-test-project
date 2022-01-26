import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./views/Login"
import Guitars from "./views/Guitars"
import Profile from "./views/Profile"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> {/* <Switch> */}
          <Route path="/" element={<Login />} />
          <Route path="/guitars" element={<Guitars />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
