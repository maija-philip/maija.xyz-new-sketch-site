import * as React from "react";
import Page from "../components/Page";
import DemoBox from "../components/DemoBox";
import useWindowWidth from "../utils/useWindowWidth";
import { MAX_WIDTH_MOBILE, MAX_WIDTH_TABLET } from "../utils/constants";
import getHomepageProjects from "../utils/getHomepageProjects";
import { Project } from "./SpecificListPage";
import { CircularProgress } from "@mui/material";
// import redLady from "../assets/sketches/red-lady.PNG"

export default function Homepage() {
  const windowWidth = useWindowWidth();
  const [error, setError] = React.useState<string>("");
  const [projects, setProjects] = React.useState<Project[] | undefined>(
    undefined
  );

  // get items
  React.useEffect(() => {
    setError("");

    getHomepageProjects().then((projectsResult) => {
      console.log("Project results: ", projectsResult);
      if (!projectsResult) {
        setError("Something went wrong fetching the projects");
        return;
      }

      setProjects(projectsResult);
    });
  }, []);

  return (
    <Page hasBackButton={false}>
      <>
        {windowWidth > MAX_WIDTH_TABLET ? (
          <header className="homepage">
            <img
              src={require("../assets/sketches/red-lady.PNG")}
              alt="sketch of a wavy haired woman"
              className="sketch"
            />
            <div>
              <h1 className="homepage">Maija Philip</h1>
              <h2 className="homepage">Full Stack Software Developer</h2>
            </div>
          </header>
        ) : (
          <header className="homepage mobile">
            <img
              src={require("../assets/sketches/red-lady.PNG")}
              alt="sketch of a wavy haired woman"
              className="sketch"
            />
            <div>
              <h1 className="homepage-mobile">
                Maija
                <br />
                Philip
              </h1>
              <h2 className="homepage-mobile">
                Full Stack Software
                <br />
                Developer
              </h2>
            </div>
          </header>
        )}
        {error !== "" ? (
          <p>{error}</p>
        ) : !projects ? (
          <CircularProgress />
        ) : projects.length < 1 ? (
          <p>No Projects</p>
        ) : windowWidth > MAX_WIDTH_MOBILE ? (
          <div className="demo-box-home homepage-demo-boxes">
            <div className="column">
              {windowWidth <= MAX_WIDTH_TABLET ? (
                <div className="offset-columns"></div>
              ) : (
                <></>
              )}
              {projects.map((project, index) => {
                if (index % 2 === 0) {
                  return <DemoBox key={index} project={project} />;
                }
                return <></>;
              })}
            </div>
            <div className="column">
              {windowWidth > MAX_WIDTH_TABLET ? (
                <div className="offset-columns"></div>
              ) : (
                <></>
              )}
              {projects.map((project, index) => {
                if (index % 2 === 1) {
                  return <DemoBox key={index} project={project} />;
                }
                return <></>;
              })}
            </div>
          </div>
        ) : (
          <div className="demo-box-home mobile-homepage">
            {projects.map((project, index) => (
              <div className={index % 2 === 0 ? "left" : "right"}>
                <DemoBox key={index} project={project} />
              </div>
            ))}
          </div>
        )}
      </>
    </Page>
  );
}
