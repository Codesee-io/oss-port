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
const Swag = () => {
    return (
        <RootLayout>
            <main style={pageStyles}>
                <div className="flex flex-col items-center justify-start" >
                    <LogoWhiteBackground style={{ width: "400px", paddingLeft: '33px' }} />
                    <div className="text-2xl font-bold pt-3">Snag your OSS Port + Hacktoberfest swag!</div>
                    <div>Set sail with an OSS Port project during Hacktoberfest 2021</div>
                    <div>and get sweet swag.</div>
                    <CallToAction
                        href="https://github.com/codesee-io/oss-port#how-to-list-your-own-project"
                        rel="noopener"
                        target="_blank"
                        className="mt-12"
                    >
                        Claim your swag
                    </CallToAction>

                    <div className="grid gap-4 grid-cols-3">
                        <div></div>
                        <div>Maintainers</div>
                        <div>Contributors</div>
                        <div>Crew sweatshirt</div>
                        <div>Use CodeSee Maps and publish a map to your OSS Port project</div>
                        <div>Submit at least 3 PRs to 2 OSS Port projects</div>
                        <div>Crew t-shirt</div>
                        <div>Submit a project to the OSS Port community</div>
                        <div>Submit at least 5 PRs to an OSS Port project</div>
                        <div>vinyl sticker</div>
                        <div>Included—we got you</div>
                        <div>Submit your first PR to an OSS Port project</div>
                    </div>

                    <div style={{ maxWidth: "450px" }}>
                        <p className="pt-20 pb-4">
                            Only GitHub PRs merged to OSS Port projects during Hacktoberfest 2021 are eligible for rewards.
                        </p>
                    </div>

                    

                </div>


            </main>
        </RootLayout>
    )
}

export default Swag;