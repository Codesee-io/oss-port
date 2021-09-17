import React from "react";

const ContactUs = () => {
  return (
    <section
      className="hero is-medium is-bold"
      style={{ height: "100%", backgroundColor: "white" }}
    >
      <div className="hero-body columns" style={{ paddingBottom: "10px" }}>
        <div className="column is-6" style={{ marginLeft: "10px" }}>
          <div className="container">
            <h1 className="title" id="contact">
              Student Code-in <span role ="img" aria-label="Scodein">&#129321;</span>
            </h1>
            <h2 className="subtitle has-text-weight-semibold">
              <p>
                {" "}
                - The fast evolving face of technology today sets higher demands
                for the massive crowd
                pleasing field "OPEN SOURCE".
              </p>
              <p>
                {" "}
                - Student Code-in is a global program to introduce
                university/pre-university students
                to open source software development.
              </p>
              <p>
                <br />
                Visit our website :{" "}
                <a
                  href="https://scodein.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://scodein.tech{" "}
                </a>
              </p>
            </h2>
          </div>
        </div>
        <div className="column is-6">
          <div className="container">
            <h1 className="title">Feedback<span role ="img" aria-label="Feedback">&#128513;</span> </h1>
            <h2 className="subtitle has-text-weight-semibold">
              <p>
                {" "}
                - Do you know What is the shortest word in the English language
                that contains the letters: abcdef? Answer: "Feedback"{" "}
              </p>

              <p>
                {" "}
                - Don’t forget that feedback is one of the most essential
                elements of good communication.
              </p>
              <p>
                <br />
                <a
                  href="https://www.shortto.com/studentmantrafeedback"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Submit your feedback here{" "}
                </a>
              </p>
            </h2>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default ContactUs;
