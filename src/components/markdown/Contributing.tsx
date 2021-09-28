import React, { FunctionComponent } from "react";
import AnchorHeader from "./AnchorHeader";
import HacktoberfestIssues from "./HacktoberfestIssues";
import HelpWanted from "./HelpWanted";

const Contributing: FunctionComponent = ({ children }) => {
  return (
    <div className="mb-8">
      <AnchorHeader id="contributing">Contributing</AnchorHeader>
      {children}
      <div className="md:flex md:space-x-4">
        <HelpWanted />
        <HacktoberfestIssues />
      </div>
    </div>
  );
};

export default Contributing;
