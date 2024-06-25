import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <div className="navigation">
      <Link className='navigation-link' to='/'>Home</Link>
      <Link className='navigation-link' to='/AllPlayers'>Players</Link>
    </div>
  )
}