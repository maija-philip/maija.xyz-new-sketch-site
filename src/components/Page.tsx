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
  let windowWidth = useWindowWidth();

  return (
    <div className="max-width-page-boundary">
      <div
        className={windowWidth > MAX_WIDTH_MOBILE ? "page page-wide" : "page"}
      >
        {/* Back Button and/or Navigation */}

        {windowWidth > MAX_WIDTH_MOBILE ? (
          <NavigationBig />
        ) : (
          <NavigationSmall isRight={hasBackButton} />
        )}
        {hasBackButton && (
          <BackButton isTop={windowWidth <= MAX_WIDTH_MOBILE} />
        )}

        {/* Content */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
