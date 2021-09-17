import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card";

const CodeandGrab = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("./swags.json")
      .then((res) => {
        setData(res.data.swags);
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
              Code and Grab &#129300;
            </h1>
            <h2 className="subtitle has-text-weight-semibold">
              <p>
              As a developer, nothing piques the interest more than developer swag!
              Here is a list created Code and Grab to scratch your own itch by starting a curation of such opportunities.
              These are crowdsourced and verified by the community. All of them ship worldwide! 
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

export default CodeandGrab;
