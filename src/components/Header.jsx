import Navigation from "./Navigation"

export default function Header() {
  return (
    <div className="header" key="header">
      <Navigation />
      <h1 className="header-title">The 2024 Puppy Bowl</h1>
      <h1 className="fa-solid fa-dog"></h1>
    </div>
  )
}