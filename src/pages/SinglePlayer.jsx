import { Link, useNavigate } from "react-router-dom"

import { deletePlayer } from "../API"
import { isCompositeComponent } from "react-dom/test-utils"

export default function SinglePlayer({player, onClick}) {
  const navigate = useNavigate()

  function featPlayer(e) {
    e.preventDefault()
    navigate(`../Player/${player.id}`)
  }

  function deleteClick(e) {
    e.preventDefault()
    deletePlayer(player.id)
  }

  return (
    <div className={`player ${player.id}`} key="player">
      <h2 onClick={featPlayer} className="player-list-name">{player.name}</h2>
      <h3 className="player-list-breed">{player.breed}</h3>
      <div className="player-list-img-div">
        <img onClick={featPlayer} className="player-list-img" src={player.imageUrl} alt={player.name} />
      </div>
      <button onClick={deleteClick} className="player-list-button">Delete</button>
    </div>
  )
}