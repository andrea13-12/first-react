import React from "react";
import FontAwesomeIcon from "fontawesome";

export default function Headers() {
  return (
    <header>
      <nav className="nav">
      <FontAwesomeIcon icon="fa-solid fa-chalkboard" />
        <h4 className="an">A&N</h4>
      <ol className="nav-items">
        <li>About</li>
        <li>Contact</li>
      </ol>
      </nav>
    </header>
  )

}
