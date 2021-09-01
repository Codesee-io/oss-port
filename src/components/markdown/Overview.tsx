import React, { FunctionComponent } from "react";

const Overview: FunctionComponent = ({ children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl text-black-500 font-bold mb-4">Overview</h2>
      {children}
    </div>
  );
};

export default Overview;
