import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import Wordmark from "../images/Wordmark";
import CallToAction from "./CallToAction";

const Header: FunctionComponent = () => {
  return (
    <header className="bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="block">
          <Wordmark width="200" className="my-2" />
        </Link>
        <div className="flex items-center justify-center">
          <div className="hidden sm:block">
            <a href="/swag" style={{ color: "white", marginRight: "20px" }}>
              Get Swag!
            </a>
          </div>
          <div className="hidden sm:block">
            <a href="/about" style={{ color: "white", marginRight: "20px" }}>
              About
            </a>
          </div>
          <div className="hidden sm:block">
            <CallToAction
              href="https://github.com/codesee-io/oss-port#how-to-list-your-own-project"
              rel="noopener"
              target="_blank"
            >
              List Your Project
            </CallToAction>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
