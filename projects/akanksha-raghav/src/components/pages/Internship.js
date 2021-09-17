import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card";

const Internship = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("./internship.json")
      .then((res) => {
        setData(res.data.internship);
      })
      .catch((err) => console.log(err.data));
  }, []);
  return (
    <section className="section">
      <div className="hero-body columns" style={{ paddingBottom: "2rem" , marginTop:"100px"}}>
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
              Internships &#129300;
            </h1>
            <h2 className="subtitle has-text-weight-semibold">
              <p>
                An internship is an opportunity offered by an employer to
                potential employees, called interns, to work at a firm for a
                fixed period of time. Interns are usually undergraduates or
                students, and most internships last between a month and three
                months. Internships are usually part-time if offered during a
                university semester and full-time if offered during the vacation
                periods.
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

export default Internship;
