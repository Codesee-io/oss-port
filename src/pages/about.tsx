import * as React from "react"
import { Link } from "gatsby"
import RootLayout from "../components/RootLayout";
import LogoWhiteBackground from "../images/LogoWhiteBackground";
import CallToAction from "../components/CallToAction";


// styles
const pageStyles = {
  color: "#232129",
  padding: "32px 96px 96px 96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const linkStyles = {
  color: "rgb(0, 84, 149)",
  textDecoration: "underline"
}

// markup
const About = () => {
  return (
    <RootLayout>
      <main style={pageStyles}>
        <div className="flex flex-col items-center justify-start" >
          <LogoWhiteBackground style={{width: "400px", paddingLeft: '33px'}}/>
          <div className="text-2xl font-bold pt-3">Let's onboard better.</div>
          <div>Helping project contributors and maintainers</div>
          <div>eliminate the barriers to taking on a new codebase.</div>
          <CallToAction
            href="https://github.com/codesee-io/oss-port#how-to-list-your-own-project"
            rel="noopener"
            target="_blank"
            className="mt-12"
            style={{backgroundColor: "rgb(0, 84, 149)", color: "white"}}
          >
            Add Your Project
          </CallToAction>
          <h1 className="text-2xl font-bold pt-20 pb-4">About OSS Port</h1>
          <div style={{maxWidth:"450px"}}>
            <p className="pb-4">
              OSS Port was created to connect projects to people and ease codebase onboarding.
            </p>
            <p className="pb-4">
              Maintainers can tag their projects to topics like ‘education’ and ‘social good’, so contributors can search, select, and quickly onboard to the projects that matter most to them.
            </p>
            <p className="pb-4">
              OSS Port allows maintainers to provide contribution best practices, support guidance, and interactive visual walkthroughs of their codebase using CodeSee Maps.
            </p>
            <p className="pb-4">
              With Maps, understand how files are connected, see how a pull request fits into the larger architecture, and more.
            </p>
            <a style={linkStyles} href="https://www.codesee.io" target="_blank">Learn more about CodeSee Maps</a>
          </div>
        </div>
      </main>
    </RootLayout>
  )
}

export default About;
