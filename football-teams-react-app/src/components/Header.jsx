import React from "react";

const Header = ({ children, subheader }) => (
  <header className="headercontainer">
    <h1 className="headercontainer__main">
      { children }
    </h1>

    <h5 className="headercontainer__subheader">{ subheader }</h5>
  </header>
);

export default Header;
