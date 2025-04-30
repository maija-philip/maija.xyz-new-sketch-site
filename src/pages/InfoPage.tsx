import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../components/Page";
import { CircularProgress } from "@mui/material";
import getProjectInfo from "../utils/getProjectInfo";
import useWindowWidth from "../utils/useWindowWidth";
import { MAX_WIDTH_MOBILE } from "../utils/constants";

export interface ItemDetails {
  "file-name": string;
  image: string;
  folder: string;
  alt: string;
  title: string;
  subtitle: string;
  color: string;
  links: [{ title: string; url: string }];
  description: string;
}

export default function InfoPage() {
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();
  const { item } = useParams();
  const [itemDetails, setItemDetails] = React.useState<ItemDetails | undefined>(
    undefined
  );
  const [error, setError] = React.useState<string>("");

  // Get the data about the project requested
  React.useEffect(() => {
    if (!item) {
      navigate("/");
      return;
    }

    setError("");
    getProjectInfo(item).then((projectInfo) => {
      if (!projectInfo) {
        setError("Something went wrong");
        return;
      }
      setItemDetails(projectInfo);
    });
  }, [item, navigate]);

  return (
    <Page hasBackButton={true}>
      {/* Check if you should display an error, loader, or content */}
      {error !== "" ? (
        <p>{error}</p>
      ) : !itemDetails ? (
        <CircularProgress />
      ) : (
        <div
          className={
            windowWidth < MAX_WIDTH_MOBILE
              ? "info-content mobile"
              : "info-content"
          }
        >
          {/* Big Image */}
          <img
            src={require(`../assets/media/${itemDetails.folder}/${itemDetails.image}-big.png`)}
            alt={itemDetails.alt}
            unselectable="on"
          />
          {/* Project Details */}
          <h1>{itemDetails.title}</h1>
          <h2>{itemDetails.subtitle}</h2>
          {itemDetails.links.map((link, index) => {
            return (
              <a href={link.url} key={index} style={{color: itemDetails.color}}>
                {link.title}
              </a>
            );
          })}

          {/* Description */}
          <p>
            {itemDetails.description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      )}
    </Page>
  );
}
