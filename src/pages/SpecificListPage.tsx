import * as React from "react";
import Page from "../components/Page";
import { CircularProgress } from "@mui/material";
import getProjects from "../utils/getProjects";
import DemoBox from "../components/DemoBox";

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
        <h1>
          {pageType}
          <br />
          Projects
        </h1>

        {error !== "" ? (
          <p>{error}</p>
        ) : !projects ? (
          <CircularProgress />
        ) : projects.length < 1 ? (
          <p>No Projects</p>
        ) : (
          <div className="demo-box-home">
            {projects.map((project, index) => (
              <DemoBox
                key={index}
                project={project}
              />
            ))}
          </div>
        )}
      </div>
    </Page>
  );
}
