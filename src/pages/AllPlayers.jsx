import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPlayers } from "../API";
import SinglePlayer from "./SinglePlayer";

import PlayerSearch from "./PlayerSearch";
import PlayerForm from "./NewPlayerForm";

export default function AllPlayers({ players, setPlayers }) {

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

  useEffect(() => {
    fetchPlayers()
  }, [players])

  return (
    <div className="all-players">
      <PlayerForm players={players} setPlayers={setPlayers} />
      <PlayerSearch players={players} setPlayers={setPlayers}/>
      <div className="grid">
        {
          players.map(player => {
            return (
              <div key={player.id}>
                <SinglePlayer player={player} key={player.id} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}