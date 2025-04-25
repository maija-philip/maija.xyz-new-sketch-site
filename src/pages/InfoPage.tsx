import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../components/Page";
import { CircularProgress } from "@mui/material";
import getProjectInfo from "../utils/getProjectInfo";

export interface ItemDetails {
  "file-name": string;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  links: [{ title: string; url: string }];
  description: string;
}

export default function InfoPage() {
  const navigate = useNavigate();
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
        <div>
          {/* Big Image */}
          <img
            src={require(`../assets/media/development/${itemDetails.img}-big.png`)}
            alt={itemDetails.alt}
            unselectable="on"
          />
          {/* Project Details */}
          <h1>{itemDetails.title}</h1>
          <h2>{itemDetails.subtitle}</h2>
          {itemDetails.links.map((link, index) => {
            return <a href={link.url}>{link.title}</a>;
          })}

          {/* Description */}
          <p>{itemDetails.description}</p>
        </div>
      )}
    </Page>
  );
}
