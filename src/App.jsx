import { useState } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// API
import { getAllPlayers } from "./API"

// components
import Header from "./components/Header"
import Homepage from "./pages/Home"
import AllPlayers from "./pages/AllPlayers"
import PlayerForm from "./pages/NewPlayerForm"
import FeatPlayer from "./components/FeatPlayer"
import "./App.css"
import SinglePlayer from "./pages/SinglePlayer"

function App() {
  const [players, setPlayers] = useState([])
  const [player, setPlayer] = useState(null)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AllPlayers" element={<AllPlayers players={players} setPlayers={setPlayers}/>} />
          <Route path="/Player/:id" element={<FeatPlayer />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App