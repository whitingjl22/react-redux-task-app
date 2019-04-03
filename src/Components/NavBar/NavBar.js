import React from "react"
import "react-router"
import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = (props) => {
  return (
    <div className="navBar">
      <ul>
        <li className="navBar-verticalLine">
          <Link to="/home">Home</Link>
        </li>
        <li className="navBar-verticalLine">
          <Link to="/tasks">Task List</Link>
        </li>
        <li>
          <Link to="/tasks/new">Task Creation</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
