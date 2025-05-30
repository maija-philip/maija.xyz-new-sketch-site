import * as React from "react";
import Page from "../components/Page";
import { CircularProgress } from "@mui/material";
import getProjects from "../utils/getProjects";
import DemoBox from "../components/DemoBox";
import useWindowWidth from "../utils/useWindowWidth";
import { MAX_WIDTH_MOBILE, MAX_WIDTH_TABLET } from "../utils/constants";

type PageType = "development" | "design" | "art";

interface SpecificListPageProps {
  pageType: PageType;
}

export interface Project {
  tag: string;
  folder: string;
  image: string;
  alt: string;
  subtitle: string;
}
export default function SpecificListPage({ pageType }: SpecificListPageProps) {
  const windowWidth = useWindowWidth();
  const [error, setError] = React.useState<string>("");
  const [projects, setProjects] = React.useState<Project[] | undefined>(
    undefined
  );

  // get items
  React.useEffect(() => {
    setError("");

    getProjects(pageType).then((projectsResult) => {
      if (!projectsResult) {
        setError("Something went wrong fetching the projects");
        return;
      }

      setProjects(projectsResult);
    });
  }, [pageType]);

  return (
    <Page hasBackButton={true}>
      <div className="specific-list-page">
        <header
          className={
            windowWidth < MAX_WIDTH_MOBILE
              ? "specific-list mobile-extra"
              : windowWidth < MAX_WIDTH_TABLET
              ? "specific-list mobile"
              : "specific-list"
          }
        >
          {pageType === "development" ? (
            <img
              src={require("../assets/sketches/outstretched-horse.PNG")}
              alt="sketch of a horse with a braided mane and forelock, outstretching their head"
              className="sketch"
            />
          ) : pageType === "design" ? (
            <img
              src={require("../assets/sketches/jumping-horse.PNG")}
              alt="sketch of a horse with a braided mane and forelock, outstretching their head"
              className="sketch"
            />
          ) : (
            <img
              src={require("../assets/sketches/horse-tounge.png")}
              alt="sketch of a horse with a braided mane and forelock, outstretching their head"
              className="sketch"
            />
          )}

          <div>
            <h1>
              {pageType}
              <br />
              Projects
            </h1>
          </div>
        </header>

        {error !== "" ? (
          <p>{error}</p>
        ) : !projects ? (
          <CircularProgress />
        ) : projects.length < 1 ? (
          <p>No Projects</p>
        ) : (
          <div className="demo-box-home">
            {projects.map((project, index) => (
              <DemoBox key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </Page>
  );
}
