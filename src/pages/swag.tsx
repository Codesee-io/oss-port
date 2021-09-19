import * as React from "react"
import { Link } from "gatsby"
import RootLayout from "../components/RootLayout";
import LogoWhiteBackground from "../images/LogoWhiteBackground";
import CallToAction from "../components/CallToAction";
import { SwagForm } from "../components/SwagForm";



// styles
const pageStyles = {
    color: "#232129",
    padding: "32px 0 96px",
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
    textAlign: "center" as "center",
    fontStyle: "italic" as "italic",
}

// markup
const Swag = () => {
    const [signedUp, setSignedUp] = React.useState(false);

    function onSubmitSuccessful() {
        setSignedUp(true);
    }

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

                    <div className="grid gap-y-0 gap-x-4 pt-12" style={{maxWidth:"1000px", gridTemplateColumns: "200px minmax(0, 1fr) minmax(0, 1fr)"}}>
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

                    <div className="relative" style={{ backgroundImage: "url(/waveField.png)", width: "100%" }}>
                        <div style={{padding: "10% 15%"}}>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="md:col-span-2">
                                    <div className="px-4 sm:px-0">
                                        <h3 className="text-3xl font-medium leading-6 text-white">Ready to snag your swag?</h3>
                                        <p className="mt-1 text-sm text-white">Set sail with an OSS Port project and get sweet swag.</p>
                                    </div>
                                    <div>
                                        <img src="/map_2.png" alt="Maps Icon"/>
                                    </div>
                                </div>
                                <div className="mt-5 md:mt-0 col-span-1">
                                    { signedUp ? renderSuccessMessage() : <SwagForm onSubmitSuccessful={onSubmitSuccessful} /> }
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </RootLayout>
    )
}

function renderSuccessMessage() {
    return (
        <div className="text-xl font-medium leading-6 text-white">
            Niiiice, it worked!
        </div>
    );
}

export default Swag;

