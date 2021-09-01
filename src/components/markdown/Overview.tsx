import React, { FunctionComponent } from "react";
import ContributionOverview from "./ContributionOverview";
import CurrentlySeeking from "./CurrentlySeeking";

const Overview: FunctionComponent = ({ children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl text-black-500 font-bold mb-4">Overview</h2>
      {children}
      <div className="flex space-x-6">
        <CurrentlySeeking />
        <ContributionOverview />
      </div>
    </div>
  );
};

export default Overview;
