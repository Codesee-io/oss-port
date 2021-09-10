import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";

const RootLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet title="OSS Port">
        <html lang="en" />
        <meta
          name="description"
          content="Find your next open-source project! On OSS Port, maintainers advertise their projects for free and make it easy to onboard new contributors"
        />
      </Helmet>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
