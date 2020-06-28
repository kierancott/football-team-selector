import React from "react";
import { Link } from "react-router-dom";
import GitHubLogo from "../assets/github_logo_white.png";


const Footer = () => (
  <footer className="footercontainer">
    <h6 className="footercontainer__text">&copy; Kieran Cott, 2020</h6>
    <div className="footercontainer__githublink">
        <p className="footercontainer__githublink__text">View code on GitHub</p>
        <Link to="https://github.com/kierancott/football-team-selector"><img className="githublogo" alt={"github logo"} src={ GitHubLogo }/></Link>
    </div>
  </footer>
);

export default Footer;
