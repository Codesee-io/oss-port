import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card";

const Opensource = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("./opensource.json")
      .then((res) => {
        setData(res.data.opensource);
      })
      .catch((err) => console.log(err.data));
  }, []);
  return (
    <section className="section">
      <div className="hero-body columns" style={{ paddingBottom: "2rem", marginTop:"100px" }}>
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
              Opensource Porgrams &#129300;
            </h1>
            <h2 className="subtitle has-text-weight-semibold">
              <p>
              Are you a college student looking to learn programming as well as help Open Source projects?
              Good thing is that there are several organizations that offer internships to students to work on open-source projects.
              Here we list the best open source internships with all the relevant information.
              </p>
            </h2>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="columns is-multiline">
        {data &&
          data.map((elem) => {
            return (
              <div
                className="column is-one-quarter"
                style={{ paddingLeft: "60px", paddingTop: "30px" }}
                key={elem.name}
              >
                <Card data={{ elem }} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Opensource;
