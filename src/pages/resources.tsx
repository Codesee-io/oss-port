import React from "react";
import RootLayout from "../components/RootLayout";
import LogoWhiteBackground from "../images/LogoWhiteBackground";

const Resources = () => (
  <RootLayout>
    <main style={{ paddingBottom: "100px" }}>
      <section
        id="swag"
        className="relative w-full bg-cover"
        style={{ backgroundImage: "url(/wave_field_light.svg)" }}
      >
        <div className="max-w-5xl mx-auto py-32 px-4">
          <div className="text-center max-w-xl ml-auto mr-auto">
            <h2 className="text-4xl font-accent leading-large">Resources</h2>
            <p className="my-4">
              All the info you need to onboard your crew at the OSS Port:
              showcase or find a project, make a map, or create a tour.
            </p>
          </div>
        </div>
      </section>
    </main>
  </RootLayout>
);

export default Resources;
