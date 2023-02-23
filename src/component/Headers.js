import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";

export default function Headers() {
  return (
    <header>
      <nav className="nav">
        <FontAwesomeIcon icon={faUmbrellaBeach} size="2x" transform={{rotate: 350}} className="iconumbrella"/>
        <h4 className="an">A&N</h4>
      <ol className="nav-items">
        <li>About</li>
        <li>Contact</li>
      </ol>
      </nav>
    </header>
  )

}
