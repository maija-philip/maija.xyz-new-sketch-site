import * as React from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { CircularProgress } from "@mui/material";

export interface ItemDetails {
  tag: string;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  links: [{ title: string; url: string }];
  description: string;
}

export default function InfoPage() {
  const { item } = useParams();
  const [itemDetails, setItemDetails] = React.useState<ItemDetails | undefined>(
    undefined
  );
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {

  }, []);

  return (
    <Page hasBackButton={true}>
      {error !== "" ? (
        <p>{error}</p>
      ) : !itemDetails ? (
        <CircularProgress />
      ) : (
        <div>
          <img
            src={require(`../assets/media/development/${itemDetails.img}-big.png`)}
            alt={itemDetails.alt}
            unselectable="on"
          />
          <h1>{itemDetails.title}</h1>
          <h2>{itemDetails.subtitle}</h2>
          {itemDetails.links.map((link, index) => {
            return <a href={link.url}>{link.title}</a>
          })}
          <p>{itemDetails.description}</p>
        </div>
      )}
    </Page>
  );
}
