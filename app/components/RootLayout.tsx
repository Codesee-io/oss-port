import type { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

const RootLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-3 text-white bg-aqua-700 text-center">
        OSS Port is now Open-Source Hub!
      </div>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
