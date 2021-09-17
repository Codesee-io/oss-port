import React, { useState, useEffect} from "react";
import axios from "axios";
import Card from "../card";

const CA = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("./ca.json")
      .then((res) => {
        setData(res.data.ca);
      })
      .catch((err) => console.log(err.data));
  }, []);

  return (
    <section className="section">
      <div className="hero-body columns" style={{ paddingBottom: "2rem" , marginTop:"100px" }}>
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
              Campus Ambessador Programs &#129300;
            </h1>
            <h2 className="subtitle has-text-weight-semibold">
              <p>
                The campus ambassador program is the means for a company,
                organization to spread its presence, A well-managed campus
                ambassador program can provide you with plenty of learning
                opportunities And we target to bring in your consideration some
                of the best, most remarkable and eminent Campus Ambassador
                program Get to learn and develop multiple skills and become a
                better planner in terms of managing your academic
                responsibilities along with growing to your fullest by
                contributing to some of the best CA programs which are taking
                over the world by storm!!!
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
                style={{ paddingLeft: "60px", paddingTop: "30px"}}
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

export default CA;
