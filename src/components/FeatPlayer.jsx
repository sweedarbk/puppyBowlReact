import { useEffect } from "react"
import { useState } from "react"
import { getPlayer } from "../API"
import { useParams } from "react-router-dom"

export default function FeatPlayer() {
  let { id } = useParams()
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    async function fetchPlayer() {
      setPlayer(await getPlayer(id))
    }
    fetchPlayer()
  }, [])

  return (
    <>
    {
      player && 
      <div className="feat-player">
      <h1>Meet {player.name}!</h1>
      <h2>{player.name} is a {player.breed}.</h2>
      <img src={player.imageUrl} alt="img" width={350} />
      </div>

    }
    </>
  )
}