import React, { FunctionComponent } from "react";
import Footer from "./Footer";
import Header from "./Header";

const RootLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
