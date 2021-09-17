import React from "react";

import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) drawerClasses = "side-drawer open";

  return (
    <nav className={drawerClasses}>
      <br /> <br />
      <ul>
        <li>
          <a href="/"> Home</a>
        </li>
       <li>
          <a href="/#campusambassador"> Campus</a>
        </li>
       <li>
          <a href="/#scholarships"> Scholarships</a>
        </li>
       <li>
          <a href="/#internships"> Internship</a>
        </li>
       <li>
          <a href="/#fulltime"> Full Time</a>
        </li>
       <li>
          <a href="/#opensource"> Open-Source</a>
        </li>
       <li>
          <a href="/#codeandgrab"> Code and Grab</a>
        </li>
        <li>
          <a href="/#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
