import type { MetaFunction } from "@remix-run/node";
import RootLayout from "../components/RootLayout";
import LogoWhiteBackground from "../images/LogoWhiteBackground";
import CallToAction from "../components/CallToAction";
import ExternalLink from "../components/ExternalLink";
import { HOW_TO_LIST_PROJECT_URL } from "../utils/constants";

export const meta: MetaFunction = () => ({
  title: "About OSS Port",
});

const About = () => {
  return (
    <RootLayout>
      <header className="mx-auto max-w-2xl px-4 mb-8 pt-12 text-center">
        <LogoWhiteBackground style={{ width: "400px", margin: "0 auto" }} />
        <h1 className="text-2xl font-accent my-3 text-center">
          Let's onboard better.
        </h1>
        <p className="text-center max-w-sm mx-auto mb-6">
          Helping contributors and maintainers eliminate the barriers to taking
          on a new codebase.
        </p>
        <CallToAction
          href={HOW_TO_LIST_PROJECT_URL}
          className="mt-6 bg-yellow-200"
        >
          List Your Project
        </CallToAction>
      </header>
      <main className="mx-auto max-w-2xl px-4 mb-20">
        <h1 className="text-2xl font-bold pt-20 pb-4">About OSS Port</h1>
        <div className="space-y-4">
          <p>
            OSS Port was created to connect projects to people and ease codebase
            onboarding.
          </p>
          <p>
            Maintainers can tag their projects to topics like ‘education’ and
            ‘social good’, so contributors can search, select, and quickly
            onboard to the projects that matter most to them.
          </p>
          <p>
            OSS Port allows maintainers to provide contribution best practices,
            support guidance, and interactive visual walkthroughs of their
            codebase using CodeSee Maps.
          </p>
          <p>
            With Maps, understand how files are connected, see how a pull
            request fits into the larger architecture, and more.
          </p>
          <p>
            <ExternalLink href="https://www.codesee.io">
              Learn more about CodeSee Maps
            </ExternalLink>
          </p>
        </div>
      </main>
    </RootLayout>
  );
};

export default About;
