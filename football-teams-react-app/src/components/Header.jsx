import React from "react";

const Header = ({ children, subheader }) => (
  <header className="pageheader">
    <h1>
      { children }
    </h1>

    <h5>{ subheader }</h5>
  </header>
);

export default Header;
