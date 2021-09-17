import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card";

const Scholarship = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("./scholarships.json")
      .then((res) => {
        setData(res.data.scholarships);
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
              Scholarships &#129300;
            </h1>
            <h2 className="subtitle has-text-weight-semibold">
              <p>
                Applying for and receiving financial aid is an important part of
                the educational process. We always stress that you should apply
                early and apply often. Go through the scholarship search on
                Scodex, we present before you a great chance towards finding the
                best scholarships you are eligible for, browse through our site
                to find helpful tips and advice on the scholarship application
                process. The more scholarship information you have, the more
                prepared you will be to do the best shortly.
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

export default Scholarship;
