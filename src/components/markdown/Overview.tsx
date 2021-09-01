import React, { FunctionComponent } from "react";
import CurrentlySeeking from "./CurrentlySeeking";

const Overview: FunctionComponent = ({ children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl text-black-500 font-bold mb-4">Overview</h2>
      {children}
      <CurrentlySeeking />
    </div>
  );
};

export default Overview;
