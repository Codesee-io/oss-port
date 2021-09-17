import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Ca from "./components/pages/CA";
import Footer from "./components/footer/Footer";
import FullTime from "./components/pages/FullTime";
import Header from "./components/HeaderPage";
import Intern from "./components/pages/Internship";
import MainPage from "./MainPage";
import Os from "./components/pages/opensourceprogram";
import Scholarships from "./components/pages/Scholarship";
import Swag from "./components/pages/codeandgrab";

function App() {
  return (
    <div>
      <Header />
      <div style={{ height: "100px", background: "white" }}></div>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/internships" component={Intern} />
          <Route path="/fulltime" component={FullTime} />
          <Route path="/campusambassador" component={Ca} />
          <Route path="/opensource" component={Os} />
          <Route path="/codeandgrab" component={Swag} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
