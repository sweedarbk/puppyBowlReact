import { useState } from "react"
import { addPlayer } from "../API"
import { getAllPlayers } from "../API"
import AllPlayers from "./AllPlayers"

export default function PlayerForm({ players, setPlayers }) {
  const [player, setPlayer] = useState({})

  async function fetchPlayers(data='') {
    const recievedPlayers = await getAllPlayers();
    const array = recievedPlayers.filter(
      (player) => {
        const key = player.name.toLowerCase()
        return key.includes(data.toLowerCase())
      }
    )
    setPlayers(array)
  }

  const nameChange = (e) => {
    player.name = e.target.value
    setPlayer(player)
  }

  const breedChange = (e) => {
    player.breed = e.target.value
    setPlayer(player)
  }

  const imageChange = (e) => {
    player.imageUrl = e.target.value
    setPlayer(player)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    await addPlayer(player)
    await fetchPlayers()
  }

  return (
    <div className="player-form-container">
      <div className="player-form-div">
        <form className="player-form">
          <h3>Add a Player</h3>
          <label>Name:
          <input className="player-form-input" name="name" type="text" onChange={nameChange}/>
          </label>
          <label>Breed:
          <input className="player-form-input" type="text" onChange={breedChange}/>
          </label>
          <label>Image URL:
          <input className="player-form-input" type="text" onChange={imageChange}/>
          </label>
          <button onClick={handleClick} className="player-form-button">Add Player</button>
        </form>
      </div>
    </div>
  )
}