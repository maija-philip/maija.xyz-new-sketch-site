import * as React from "react";
import { Link } from "react-router-dom";

export default function NavigationBig() {
  return (
    <div className="navigation-big">
      <div>
        <Link to="/">Maija Philip</Link>
      </div>
      <div className="many-links-row">
        <Link to="/development">Development</Link>
        <Link to="/design">Design</Link>
        <Link to="/art">Art</Link>
        <a
          href="https://maija.xyz/Philip_Maija_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
