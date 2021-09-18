import * as React from "react"
import { Link } from "gatsby"
import RootLayout from "../components/RootLayout";
import LogoWhiteBackground from "../images/LogoWhiteBackground";
import CallToAction from "../components/CallToAction";


// styles
const pageStyles = {
    color: "#232129",
    padding: "32px 96px 96px 96px",
    fontFamily: "SF Pro Text, -apple-system, Roboto, sans-serif, serif",
}

const linkStyles = {
    color: "rgb(0, 84, 149)",
    textDecoration: "underline"
}
const tableStylesWhiteHeader = {
    backgroundColor: "#ffffff",
    padding: "17px 22px 22px 17px",
    fontSize: "21px",
    fontWeight: 500,
    color: "#021443",
    textAlign: "center" as "center",

}
const tableStylesLabel = {
    padding: "17px 22px 22px 17px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#021443",
    textAlign: "right" as "right",
    textTransform: "uppercase" as "uppercase",

}

const tableStylesTeal = {
    backgroundColor: "#E9F7F680",
    padding: "17px 22px 22px 17px",
    fontSize: "14px",
    color: "#021443",
    lineHeight: "19px",
    height: "72px",
    width: "335px",
    textAlign: "center" as "center",
}

const tableStylesWhite = {
    backgroundColor: "#ffffff80",
    padding: "17px 22px 22px 17px",
    fontSize: "14px",
    color: "#021443",
    textAlign: "center" as "center",

}

const tableStylesNote = {
    marginTop: "40px",
    padding: "17px 22px 22px 17px",
    fontSize: "14px",
    color: "#021443",
    width: "335px",
    textAlign: "center" as "center",

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

                    <div className="grid gap-y-0 gap-x-4 grid-cols-3 pt-12">
                        <div></div>
                        <div style={tableStylesWhiteHeader}>Maintainers</div>
                        <div style={tableStylesWhiteHeader}>Contributors</div>
                        <div style={tableStylesLabel}>Crew sweatshirt</div>
                        <div style={tableStylesTeal}>Use CodeSee Maps and publish a map to your OSS Port project</div>
                        <div style={tableStylesTeal}>Submit at least 3 PRs to 2 OSS Port projects</div>
                        <div style={tableStylesLabel}>Crew t-shirt</div>
                        <div style={tableStylesWhite}>Submit a project to the OSS Port community</div>
                        <div style={tableStylesWhite}>Submit at least 5 PRs to an OSS Port project</div>
                        <div style={tableStylesLabel}>vinyl sticker</div>
                        <div style={tableStylesTeal}>Included—we got you</div>
                        <div style={tableStylesTeal}>Submit your first PR to an OSS Port project</div>
                        <div></div>
                        <div></div>
                        <div style={tableStylesNote}>
                            Only GitHub PRs merged to OSS Port projects during Hacktoberfest 2021 are eligible for rewards.
                        </div>
                    </div>



                </div>


            </main>
        </RootLayout>
    )
}

export default Swag;