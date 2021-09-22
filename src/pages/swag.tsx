import React from "react";
import RootLayout from "../components/RootLayout";
import LogoWhiteBackground from "../images/LogoWhiteBackground";
import CallToAction from "../components/CallToAction";
import SwagForm from "../components/SwagForm";
import ExternalLink from "../components/ExternalLink";

const QUALITY_PR_LINK =
  "https://hacktoberfest.digitalocean.com/resources/quality-standards";

const Swag = () => (
  <RootLayout>
    <main className="pt-12">
      <div className="flex flex-col items-center justify-start">
        <LogoWhiteBackground
          className="max-w-full px-4"
          style={{ width: "400px" }}
        />
        <h1 className="text-3xl leading-large my-4 font-accent text-center px-6">
          Snag your OSS Port + Hacktoberfest swag!
        </h1>
        <p className="text-lg font-medium px-6 max-w-lg text-center leading-6">
          Set sail with an OSS Port project during Hacktoberfest 2021 and get
          sweet swag.
        </p>
        <CallToAction href="#swag" className="mt-12">
          Claim your swag
        </CallToAction>

        <section className="my-12 max-w-6xl mx-auto text-black-500">
          <div className="rewards-grid lg:mr-40">
            <div className="header-maintainers p-6 bg-white font-bold text-center text-xl">
              Maintainers
            </div>
            <div className="header-contributors p-6 bg-white font-bold text-center text-xl mt-12 md:mt-0 ">
              Contributors
            </div>
            <div className="reward-tier-1 p-6 font-medium text-right uppercase self-center text-sm">
              Sweatshirt
              <br />+ T-shirt
              <br />+ Sticker
            </div>

            <div className="reward-tier-1-maintainers bg-aqua-50 bg-opacity-50 p-4 text-sm">
              <p className="font-medium uppercase self-center text-sm md:hidden mb-2 text-center">
                Sweatshirt + T-shirt + Sticker
              </p>
              <ul className="pl-4 list-disc list-outside leading-6">
                <li>List a project on OSS Port, including a CodeSee Map</li>
                <li>
                  Create more than one Map using features Labels, Notes, and
                  Tours
                </li>
                <li>Complete the CodeSee user feedback form</li>
                <li>
                  Post to Twitter, Facebook, or LinkedIn sharing your OSS Port
                  experience with the #Hacktoberfest hashtag
                </li>
              </ul>
            </div>
            <div className="reward-tier-1-contributors bg-aqua-50 bg-opacity-50 p-4 text-sm">
              <p className="font-medium uppercase self-center text-sm md:hidden mb-2 text-center">
                Sweatshirt + T-shirt + Sticker
              </p>
              <ul className="pl-4 list-disc list-outside leading-6">
                <li>
                  Submit{" "}
                  <ExternalLink href={QUALITY_PR_LINK}>
                    7 quality PRs
                  </ExternalLink>{" "}
                  (must have #hacktoberfest-accepted tag) to at least 2 OSS Port
                  projects
                </li>
                <li>Complete the CodeSee user feedback form</li>
                <li>
                  Post to Twitter, Facebook, or LinkedIn sharing your OSS Port
                  experience with the #Hacktoberfest hashtag
                </li>
              </ul>
            </div>

            <div className="reward-tier-2 p-6 font-medium text-right uppercase self-center text-sm">
              T-shirt
              <br />+ Sticker
            </div>
            <div className="reward-tier-2-maintainers p-4 bg-white text-sm">
              <p className="font-medium uppercase self-center text-sm md:hidden mb-2 text-center">
                T-shirt + Sticker
              </p>
              <ul className="pl-4 list-disc list-outside leading-6">
                <li>List a project on OSS Port, including a CodeSee Map </li>
                <li>
                  Post to Twitter, Facebook, or LinkedIn sharing your OSS Port
                  experience with the #Hacktoberfest hashtag
                </li>
              </ul>
            </div>
            <div className="reward-tier-2-contributors p-4 bg-white text-sm">
              <p className="font-medium uppercase self-center text-sm md:hidden mb-2 text-center">
                T-shirt + Sticker
              </p>
              <ul className="pl-4 list-disc list-outside leading-6">
                <li>
                  Submit{" "}
                  <ExternalLink href={QUALITY_PR_LINK}>
                    4 quality PRs
                  </ExternalLink>{" "}
                  (must have #hacktoberfest-accepted tag) to OSS Port projects
                </li>
                <li>
                  Post to Twitter, Facebook, or LinkedIn sharing your OSS Port
                  experience with the #Hacktoberfest hashtag
                </li>
              </ul>
            </div>
            <div className="footer mt-10 text-sm p-4 text-center">
              Only GitHub PRs merged to OSS Port projects during Hacktoberfest
              2021 are eligible for rewards.
            </div>
          </div>
        </section>

        <section
          className="relative w-full bg-cover"
          style={{ backgroundImage: "url(/wave_field.svg)" }}
        >
          <div className="max-w-5xl mx-auto py-16 px-4">
            <div className="md:flex justify-between gap-6">
              <div className="">
                <div className="">
                  <h2 className="text-4xl font-accent leading-large text-white">
                    Ready to snag your swag?
                  </h2>
                  <p className="my-4 font-semibold text-white">
                    Set sail with an OSS Port project and get sweet swag.
                  </p>
                </div>
                <div>
                  <img src="/map_2.png" alt="" className="hidden md:block" />
                </div>
              </div>
              <SwagForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  </RootLayout>
);

export default Swag;
