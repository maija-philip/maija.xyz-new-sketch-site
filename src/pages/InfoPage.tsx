import * as React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function InfoPage() {
  const { item } = useParams();

  return (
    <div>
        <h1>Info Page</h1>
        <p>Item: {item}</p>
        <BackButton/>
    </div>
  );
}
