import * as React from "react";
import BackButton from "./BackButton";
import NavigationSmall from "./NavigationSmall";
import useWindowWidth from "../utils/useWindowWidth";
import { MAX_WIDTH_MOBILE } from "../utils/constants";
import NavigationBig from "./NavigationBig";

interface PageProps {
  hasBackButton: boolean;
  children: React.ReactElement;
}

/**
 * Set up each page so everything looks cohesive and has all the right features
 * @param hasBackButton boolean value that toggles between navigation and back button
 * @param children react element that goes into the content section
 * @returns nothing
 */
export default function Page({ hasBackButton, children }: PageProps) {

    let windowWidth = useWindowWidth()

  return (
    <div className="page">
      {/* Back Button and/or Navigation */}

        { windowWidth > MAX_WIDTH_MOBILE ? <NavigationBig/> : hasBackButton ? <><BackButton /><NavigationSmall isRight={true} /></> : <NavigationSmall isRight={false} />}

      {/* Content */}
      <div className="content">{children}</div>

      {/* Footer */}
      <div className="footer">
        <img
          src={require("../assets/media/yellow-flowers.jpg")}
          alt="field of yellow mustard flowers cropped into a circle"
        />
        <p>
          Designed and Created by Maija Philip &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
