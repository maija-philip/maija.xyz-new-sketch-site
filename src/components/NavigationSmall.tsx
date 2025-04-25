import * as React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import { To, useNavigate } from "react-router-dom";

interface NavigationProps {
  isRight: Boolean;
}

export default function NavigationSmall({ isRight }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const goTo = (location: To) => {
    setIsOpen(false)
    navigate(location)
  }

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
            className="page-button top-right"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <CloseIcon fontSize="large"/>
            </button>

            <p onClick={() => {goTo("/")}}>Home</p>
            <p onClick={() => {goTo("/development")}}>Development</p>
            <p onClick={() => {goTo("/design")}}>Design</p>
            <p onClick={() => {goTo("/art")}}>Art</p>
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
