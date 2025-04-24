import * as React from "react";
import BackButton from "../components/BackButton";

type PageType = "development" | "design" | "art";

interface SpecificListPageProps {
  pageType: PageType;
}

export default function SpecificListPage({ pageType }: SpecificListPageProps) {
  return (
    <div>
      <h1>Specific List Page</h1>
      <p>Type: {pageType}</p>
      <BackButton/>
    </div>
  );
}
