import * as React from "react";
import Page from "../components/Page";

type PageType = "development" | "design" | "art";

interface SpecificListPageProps {
  pageType: PageType;
}

export default function SpecificListPage({ pageType }: SpecificListPageProps) {
  return (
    <Page hasBackButton={true}>
      <div>
        <h1>Specific List Page</h1>
        <p>Type: {pageType}</p>
      </div>
    </Page>
  );
}
