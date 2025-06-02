import * as React from "react";
import Page from "../components/Page";
import DemoBox from "../components/DemoBox";
import useWindowWidth from "../utils/useWindowWidth";
import { MAX_WIDTH_MOBILE, MAX_WIDTH_TABLET } from "../utils/constants";
import getHomepageProjects from "../utils/getHomepageProjects";
import { Project } from "./SpecificListPage";
import { CircularProgress } from "@mui/material";
import homepageProjects from "../assets/data/homepage-projects.json";

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
        {/* For the header, my name needs to be bigger and split in half for mobile */}
        {windowWidth > MAX_WIDTH_TABLET ? (
          <header className="homepage">
            {/* DESKTOP HEADER */}
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
            {/* MOBILE HEADER */}
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

        {/* If there is an error, or no projects, display that nicely without a react error */}
        {error !== "" ? (
          <p>{error}</p>
        ) : !projects ? (
          <CircularProgress />
        ) : projects.length < 1 ? (
          <>
            <p>No Projects</p>

            {/* The projects need to be laid out differently based on the width of the window */}
          </>
        ) : windowWidth > 960 ? (
          <div className="demo-box-home homepage-demo-boxes">
            {/* Desktop Project View */}
            <div className="column">
              {/* Map the even projects to the left */}
              {projects.map((project, index) => {
                if (index % 2 === 0) {
                  return <DemoBox key={index} project={project} extras={{
                      img: homepageProjects.images[index],
                      imgAlt: homepageProjects.imageAlts[index],
                      classes: "left",
                    }} />;
                }
                return <></>;
              })}
            </div>
            <div className="column" style={{marginBottom: '-10em'}}>
              {/* Map the odd projects with an offset at the top to the right */}
              <div className="offset-columns"></div>
              {projects.map((project, index) => {
                if (index % 2 === 1) {
                  return <DemoBox key={index} project={project} extras={{
                      img: homepageProjects.images[index],
                      imgAlt: homepageProjects.imageAlts[index],
                      classes: "right",
                    }}/>;
                }
                return <></>;
              })}
            </div>
          </div>
        ) : (
          <div
            className={
              windowWidth >= 440 && windowWidth <= MAX_WIDTH_MOBILE
                ? "demo-box-home mobile-homepage weird"
                : windowWidth > MAX_WIDTH_TABLET
                ? "demo-box-home mobile-homepage big"
                : windowWidth > MAX_WIDTH_MOBILE
                ? "demo-box-home mobile-homepage wide"
                : "demo-box-home mobile-homepage"
            }
          >
            {/* Mobile Project View */}
            {projects.map((project, index) => {
              let imgSide = index % 2 === 0 ? "left small" : "right small";
              let pageSide = index % 2 === 0 ? "left small" : "right small";

              if (windowWidth > MAX_WIDTH_TABLET) {
                imgSide = index % 2 === 0 ? "left" : "right";
                pageSide = index % 2 === 0 ? "right" : "left" ;
              } 

              return (
                <div className={pageSide}>
                  <DemoBox
                    key={index}
                    project={project}
                    extras={{
                      img: homepageProjects.images[index],
                      imgAlt: homepageProjects.imageAlts[index],
                      classes: imgSide,
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </>
    </Page>
  );
}
