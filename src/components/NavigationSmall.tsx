import * as React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

interface NavigationProps {
  isRight: Boolean;
}

export default function NavigationSmall({ isRight }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // TODO
  return (
    <>
      {/* Open the Nav Button */}
      <button
        onClick={() => {
          console.log("set!");
          setIsOpen(true);
        }}
        className={isRight ? "page-button top-right" : "page-button"}
      >
        <AppsIcon fontSize="large" />
      </button>

      {/* The Full Screen Nav */}
      {isOpen ? (
        <div className="nav-small">
          <div className="nav-small-content">
            {/* Close the Nav */}
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <CloseIcon />
            </button>

            <Link to="/">Home</Link>
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
      ) : (
        <></>
      )}
    </>
  );
}
