import React from "react";
import { Link } from "react-router-dom";

// Link is part of react-router-dom router plugin that allows us to
// link these listed items to the corresponding path in the router on App.js
// Link only takes 1 prop, which is "to". it basically links the list item to a path.
// notice that the plugin automatically makes them in to hyperlinks on the screen. plugins do the ground work for you!

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>Logo/home icon here</h1>
      </Link>
      <h3>This is the Navbar</h3>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/episodes">
          <li>Episodes</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Navbar;
