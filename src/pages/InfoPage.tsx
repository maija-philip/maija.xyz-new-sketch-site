import * as React from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";

export default function InfoPage() {
  const { item } = useParams();

  return (
    <Page hasBackButton={true}>
      <div>
        <h1>Info Page</h1>
        <p>Item: {item}</p>
      </div>
    </Page>
  );
}
