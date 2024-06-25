import { useState, useEffect } from 'react'
import { getAllPlayers } from '../API';
import AllPlayers from './AllPlayers'

export default function PlayerSearch({ players, setPlayers }) {
  const [input, setInput] = useState('')

  // fetches all players with included search bar value
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

  // sets the players on any update
  useEffect(() => {
    fetchPlayers()
  }, [])

  const handleChange = (value) => {
    setInput(value)
    fetchPlayers(value)
  } 

  return (
    <div className='navbar-div'>
        <form className='navbar'>
          <label htmlFor="navbar">
            <i className='fa-solid fa-search'></i>
          </label>
          <input className="navbar-input" type="text" name="navbar" id="navbar" placeholder='Search for a Player' onChange={(e) => handleChange(e.target.value)}></input>
        </form>                                      
    </div>
  )
}