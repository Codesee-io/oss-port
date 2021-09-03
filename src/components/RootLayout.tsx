import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

const RootLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet title="OSS Port">
        <html lang="en" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚓️</text></svg>"
        />
        <meta name="description" content="Find your next open-source project" />
      </Helmet>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
