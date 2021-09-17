import React from 'react'

const maintile = () => {
    return (
        <div>
             <div className="hero-body columns" style={{ paddingBottom: "10px", marginTop:"100px" }} >
            <div className="column is-6" style={{ marginLeft: "100px" }}>
              <div className="container">
                <h1 className="title">
                  <br />
                  <br />
                  <br />
                  Hola Amigo! &nbsp; &#x1F44B;
                </h1>
                <h2 className="subtitle has-text-weight-semibold">
                  <p>
                    {" "}
                    If you are looking for a place where you can get information
                    about{" "}
                  </p>

                  <p> &nbsp; &nbsp; - Campus Ambassador Programs</p>
                  <p>&nbsp; &nbsp; - Active Scholarships</p>
                  <p>&nbsp; &nbsp; - Full Time Opportunties</p>
                  <p>&nbsp; &nbsp; - Intern Openings</p>
                  <p>This place is one stop solution for all the listings.</p>
                </h2>
              </div>
            </div>
            <div className="coulmn is-6">
              <center>
                <img
                  src="https://i.ibb.co/2qK1ZSc/intro.png"
                  alt="student mantra"
                  width="100%"
                />
              </center>
            </div>
          </div> 
           <div className="box">
            <p className="has-text-centered ">
              <b>
                Whichever listing you are looking for, we have a dedicated section
                for it!{" "}
              </b>
            </p>
          </div>
        </div>
    )
}

export default maintile
