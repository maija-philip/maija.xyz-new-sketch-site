import * as React from "react";
import Page from "../components/Page";

type PageType = "development" | "design" | "art";

interface SpecificListPageProps {
  pageType: PageType;
}

export default function SpecificListPage({ pageType }: SpecificListPageProps) {
  return (
    <Page hasBackButton={true}>
      <div className="specific-list-page">
        <h1>{pageType}<br/>Projects</h1>

        <div className="demo-box-home">
          
        </div>
      </div>
    </Page>
  );
}
