/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const AboutUs = () => {
  return (
    <section
      className="hero is-medium is-bold"
      style={{ height: "100%" }}
      id="about"
    >
      <div className="hero-body columns" style={{ paddingBottom: "2rem" }}>
        <div className="coulmn is-6">
          <center>
            <a
              href="https://scodein.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/2qK1ZSc/intro.png"
                alt="student mantra"
                width="100%"
              />{" "}
            </a>
          </center>
        </div>
        <div className="column is-6" style={{ marginLeft: "100px" }}>
          <div className="container">
            <h1 className="title">
              <br />
              <br />
              <br />
              Wonder what/why we are? &#128526;
            </h1>
            <h2 className="subtitle has-text-weight-semibold">
              <p> - Scodex is a product of SCI (Student Code In)</p>

              <p>
                {" "}
                - We aim to provide information of some of the popular Campus
                Ambassador &nbsp; &nbsp; &nbsp; programs, Scholarships and Job
                Opportunities.
              </p>
              <p>
                {" "}
                - The pivot of our concern is in making every developer and
                enthusiastic &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; learner, leader and achiever to contribute and interact
                to amazing &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; people in and around
                industry.
              </p>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
