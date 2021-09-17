/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import './Opportunities.css';
const Opportunities = () => {
  return (
    <section
      className="hero is-medium is-bold is-centered"
      style={{ height: "100%", backgroundColor: "white", paddingTop: "64px" }}
      id="opportunties"
    >
      <div className="container has-text-centered">
        <h1 className="title">
          Are you looking for some Opportunities? &#128519;
        </h1>
        <h2 className="subtitle has-text-weight-semibold">
          Here you can check the different Opportunities and grab them!
        </h2>
      </div>
      <br />

      <div
        className="columns is-centered has-text-centered is-multiline"
        style={{ padding: "22px",marginTop:"5px" }}
      >
        <div className="column is-1 changed"></div>
        <div className="column is-3 ">
          <div
            className="card "
            style={{
              borderRadius: "30px",
              boxShadow: "none",
              backgroundColor: "pink",
              marginBottom: "30px",
              
            }}
          >
            <div className="card-content columns is-multiline">
              <div className="column is-1">
                {" "}
                <FontAwesome
                  name="university"
                  style={{
                    color: "white",
                    paddingTop: "5px",
                    fontSize: "2em",
                  }}
                >
                  {" "}
                </FontAwesome>{" "}
              </div>
              <div className="column is-9">
                <p className="is-size-4 has-text-white has-text-justify has-text-weight-bold fixed">
                  Campus Ambassador Program
                  
                </p>
              </div>
              <div
                className="column is-12 has-text-white has-text-weight-medium"
                style={{ fontSize: "16px" }}
              >
                {" "}
                <Link to="/campusambassador" className="has-text-white">
                  {" "}
                  <p> Click here to know more!! </p>{" "}
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div
            className="card "
            style={{
              borderRadius: "30px",
              boxShadow: "none",
              backgroundColor: "darkturquoise",
              marginBottom: "30px",
            }}
          >
            <div className="card-content columns is-multiline">
              <div className="column is-1">
                {" "}
                <FontAwesome
                  name="graduation-cap"
                  style={{
                    color: "white",
                    paddingTop: "5px",
                    fontSize: "2em",
                  }}
                >
                  {" "}
                </FontAwesome>{" "}
              </div>
              <div className="column is-9">
                <p className="is-size-4 has-text-white has-text-justify has-text-weight-bold fixed">
                  Scholarships 
                  <br />
                  <br />
                  
                </p>
              </div>
              <div
                className="column is-12 has-text-white has-text-weight-medium"
                style={{ fontSize: "16px" }}
              >
                {" "}
                <Link to="/scholarships" className="has-text-white">
                  {" "}
                  <p> Click here to know more!! </p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div
            className="card "
            style={{
              borderRadius: "30px",
              boxShadow: "none",
              backgroundColor: "lightseagreen",
              marginBottom: "10px",
            }}
          >
            <div className="card-content columns is-multiline">
              <div className="column is-1">
                {" "}
                <FontAwesome
                  name="laptop"
                  style={{
                    color: "white",
                    paddingTop: "5px",
                    fontSize: "2em",
                  }}
                >
                  {" "}
                </FontAwesome>{" "}
              </div>
              <div className="column is-9">
                <p className="is-size-4 has-text-white has-text-justify has-text-weight-bold fixed">
                  Internship Opportunities
                  <br />
                  <br />
                </p>
              </div>
              <div
                className="column is-12 has-text-white has-text-weight-medium"
                style={{ fontSize: "16px" }}
              >
                {" "}
                <Link to="/internships" className="has-text-white">
                  {" "}
                  <p>
                    {" "}
                    Click here to know more!!{" "}
                  </p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-1 changed"></div>
        <div className="column is-3">
          <div
            className="card "
            style={{
              borderRadius: "30px",
              boxShadow: "none",
              backgroundColor: "darkslateblue",
              marginBottom: "30px",
            }}
          >
            <div className="card-content columns is-multiline">
              <div className="column is-1">
                {" "}
                <FontAwesome
                  name="newspaper-o"
                  style={{
                    color: "white",
                    paddingTop: "5px",
                    fontSize: "2em",
                  }}
                >
                  {" "}
                </FontAwesome>{" "}
              </div>
              <div className="column is-9">
                <p className="is-size-4 has-text-white has-text-justify has-text-weight-bold fixed">
                  Full Time Opportunity
                  <br />
                  <br />
                </p>
              </div>
              <div
                className="column is-12 has-text-white has-text-weight-medium"
                style={{ fontSize: "16px" }}
              >
                {" "}
                <Link to="/fulltime" className="has-text-white">
                  {" "}
                  <p>
                    {" "}
                    Click here to know more!!{" "}
                  </p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div
            className="card "
            style={{
              borderRadius: "30px",
              boxShadow: "none",
              backgroundColor: "#d64161",
              marginBottom: "30px",
              
            }}
          >
            <div className="card-content columns is-multiline">
              <div className="column is-1">
                {" "}
                <FontAwesome
                  name="code"
                  style={{
                    color: "white",
                    paddingTop: "5px",
                    fontSize: "2em",
                  }}
                >
                  {" "}
                </FontAwesome>{" "}
              </div>
              <div className="column is-9">
                <p className="is-size-4 has-text-white has-text-justify has-text-weight-bold fixed">
                  Open-Source Programs
                  <br />
                  <br />
                </p>
              </div>
              <div
                className="column is-12 has-text-white has-text-weight-medium"
                style={{ fontSize: "16px" }}
              >
                {" "}
                <Link to="/opensource" className="has-text-white">
                  {" "}
                  <p>
                    {" "}
                    Click here to know more!!{" "}
                  </p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div
            className="card "
            style={{
              borderRadius: "30px",
              boxShadow: "none",
              backgroundColor: "#d9ad7c",
              marginBottom: "30px",
              
            }}
          >
            <div className="card-content columns is-multiline">
              <div className="column is-1">
                {" "}
                <FontAwesome
                  name="heart-o"
                  style={{
                    color: "white",
                    paddingTop: "5px",
                    fontSize: "2em",
                  }}
                >
                  {" "}
                </FontAwesome>{" "}
              </div>
              <div className="column is-9">
                <p className="is-size-4 has-text-white has-text-justify has-text-weight-bold fixed">
                  Code and Grab
                  <br />
                  <br />
                  
                </p>
              </div>
              <div
                className="column is-12 has-text-white has-text-weight-medium"
                style={{ fontSize: "16px" }}
              >
                {" "}
                <Link to="/codeandgrab" className="has-text-white">
                  {" "}
                  <p>
                    {" "}
                    Click here to know more!!{" "}
                  </p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
