import React from "react"
import "./Header.scss"
import { Logo } from "../../svgs"

const links = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/" },
  { name: "About", path: "/" },
  { name: "Partner", path: "/" },
]

const Header = () => (
  <header>
    <Logo size={50} />
    <div className="links">
      {links.map(({ name, path }, index) => (
        <p className="link" key={index}>
          {name}
        </p>
      ))}
      <button className="btn">Login</button>
      <button className="main-btn">Register</button>
    </div>
  </header>
)

export default Header
