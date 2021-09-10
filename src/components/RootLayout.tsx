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

        {/* Facebook open graph tags */}
        <meta property="og:url" content="https://www.oss-port.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Onboard open-source contributors on OSS Port"
        />
        <meta
          property="og:description"
          content="Contribute, maintain, and impact the open-source communities you care about."
        />
        <meta
          property="og:image"
          content="https://www.oss-port.com/ossport_opengraph_v1.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter open graph tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Codeseeio" />
        <meta
          name="twitter:title"
          content="Onboard open-source contributors on OSS Port"
        />
        <meta
          name="twitter:description"
          content="Contribute, maintain, and impact the open-source communities you care about."
        />
        <meta
          name="twitter:image"
          content="https://www.oss-port.com/ossport_twitter_v1.png"
        />
        <meta name="twitter:image:alt" content="TODO" />
      </Helmet>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
