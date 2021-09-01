import React, { FunctionComponent } from "react";

const Contributing: FunctionComponent = ({ children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl text-black-500 font-bold mb-4">Contributing</h2>
      {children}
    </div>
  );
};

export default Contributing;
