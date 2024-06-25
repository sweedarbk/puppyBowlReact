import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome to the Puppy Bowl!</h1>
      <Link className="homepage-link" to='/AllPlayers'>View Players</Link>
    </div>
  )
}