import * as React from "react"
import { Link } from "gatsby"
import RootLayout from "../components/RootLayout";
import LogoWhiteBackground from "../images/LogoWhiteBackground";
import CallToAction from "../components/CallToAction";



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
                                    <form action="#" method="POST">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="col-span-2">
                                                <label htmlFor="first-name" className="block text-sm text-white">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                                                />
                                            </div>

                                            

                                            <div className="col-span-2">
                                                <label htmlFor="email-address" className="block text-sm text-white">
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    autoComplete="email"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <label htmlFor="github" className="block text-sm text-white">
                                                    GitHub username
                                                </label>
                                                <input
                                                    type="text"
                                                    name="github"
                                                    id="github"
                                                    autoComplete="Github"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                                                />
                                            </div>

                                            <div className="col-span-2">
                                                <label htmlFor="country" className="block text-sm text-white">
                                                    Complete mailing address
                                                </label>
                                                <textarea
                                                    id="address"
                                                    name="address"
                                                    autoComplete="address"
                                                    rows={4}
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >

                                                </textarea>
                                            </div>

                                            <div className="col-span-1 flex items-center h-5">
                                                <input
                                                    id="contributor"
                                                    name="contributor"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="contributor" className="font-medium text-white ml-3 text-sm">
                                                    I'm a contributor
                                                </label>
                                            </div>

                                            <div className="col-span-1 flex items-center h-5">
                                                <input
                                                    id="maintainer"
                                                    name="maintainer"
                                                    type="maintainer"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="maintainer" className="font-medium text-white ml-3 text-sm">
                                                    I'm a maintainer
                                                </label>
                                            </div>
                                        </div>

                                        <div className="px-4 py-3 text-right sm:px-6 sm:py-10">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black-500 bg-yellow-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Claim your swag
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdFUAQA787V8fGfwsR7Rs_NT2LlsyRfU3vIsIdBGQowH6VIJA/viewform?embedded=true" width="640" height="1702" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


            </main>
        </RootLayout>
    )
}

// name || jsname="YPqjbf"
//tshirt size|| jsname="V68bde"

export default Swag;

function submitForm() {
    const urlFormEncoded = (obj) => {
        var str = [];
        for (var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      }
      
      const submitFunction = async (event) => {
      event.preventDefault(); // this prevents the Form from submitting to server
      
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('email-address').value;
      const gitHub = document.getElementById('github').value;
      const address = document.getElementById('address').value;
      const contributor = document.getElementById('contributor').value;
      const maintainer = document.getElementById('email-address').value;
      
      const requestFormBody = {
          'entry.381772108': firstName,
          'entry.244442038': lastName,
          'entry.244442038': gitHub,
          'entry.244442038': address,
          'entry.244442038': contributor,
          'entry.244442038': maintainer,
        }
        
        await submitForm(requestFormBody)
      
      }
      
      const submitForm = async (requestFormBody) => {
        try {
          await fetch('https://docs.google.com/forms/u/0/d/e/234234sdfds/formResponse', {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded ',
            },
            method: 'POST',
            mode: 'no-cors',
            body: urlFormEncoded(requestFormBody)
          });
        } catch (err) {
          console.error('err:', err);
        }
      }
}
// "entry.2021505370" value="username"
// "entry.1000020" value="name"
// "entry.1000025" value="email"
// "entry.960674675" value="address 1"
// "entry.1468045560" value="address 2"
// "entry.1011865037" value="address 3"
// "entry.967112212" value="tshirt"
// "entry.1493121754" value="sweatshirt"
// "entry.1050494925" value="contributor"
// "entry.1050494925" value="maintainer"