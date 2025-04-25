import * as React from "react";
import Page from "../components/Page";
import DemoBox from "../components/DemoBox";
import useWindowWidth from "../utils/useWindowWidth";
import { MAX_WIDTH_MOBILE } from "../utils/constants";

export default function Homepage() {
  const windowWidth = useWindowWidth();

  return (
    <Page hasBackButton={false}>
      <>
        {windowWidth > MAX_WIDTH_MOBILE ? (
          <header className="homepage">
            <h1 className="homepage">Maija Philip</h1>
            <h2 className="homepage">Full Stack Software Developer</h2>
          </header>
        ) : (
          <header className="homepage">
            <h1 className="homepage-mobile">
              Maija
              <br />
              Philip
            </h1>
            <h2 className="homepage-mobile">Full Stack Software<br/>Developer</h2>
          </header>
        )}

        <DemoBox
          tag={"connect4"}
          img={"connect4"}
          alt={"alt here"}
          title={"Full Stack Developer"}
        />
      </>
    </Page>
  );
}
