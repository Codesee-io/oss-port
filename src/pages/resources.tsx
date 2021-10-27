import React from "react";
import RootLayout from "../components/RootLayout";
import HowToListYourProject from "../resources/HowToListYourProject.mdx";
import mdxElements from "../components/markdown/mdxElements";
import CallToAction from "../components/CallToAction";
import { MDXProvider } from "@mdx-js/react";

// Make some React components available globally in MDX files
const mdxComponents = {
  ...mdxElements,
  ul: ({ children }) => <ul className="ml-4 markdown-element">{children}</ul>,
  ol: ({ children }) => <ol className="ml-4 markdown-element">{children}</ol>,
} as const;

const Resources = () => (
  <RootLayout>
    <main>
      <section
        className="relative w-full bg-cover mb-12"
        style={{ backgroundImage: "url(/wave_field_light.svg)" }}
      >
        <div className="max-w-5xl mx-auto py-32 px-4">
          <div className="text-center max-w-xl ml-auto mr-auto text-black-500">
            <h2 className="text-4xl font-accent leading-large">Resources</h2>
            <p className="my-4">
              All the info you need to onboard your crew at the OSS Port:
              showcase or find a project, make a map, or create a tour.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-accent leading-large text-black-500 mb-6">
          Resources
        </h2>
        <MDXProvider components={mdxComponents}>
          <HowToListYourProject />
        </MDXProvider>
      </section>
      <section
        id="resources"
        className="relative w-full bg-cover"
        style={{ backgroundImage: "url(/wave_field.svg)" }}
      >
        {/* Anchor tag to scroll to this form */}
        <a id="resources"></a>
        <div className="max-w-5xl mx-auto py-16 px-4">
          <div className="md:flex justify-center gap-6">
            <div className="max-w-3xl text-center">
              <h2 className="text-4xl mb-8 font-accent leading-large text-white">
                Looking for more helpful and inspiring developer resources?
              </h2>
              <CallToAction
                href="https://learn.codesee.io"
                rel="noopener"
                target="_blank"
              >
                Visit Our Blog
              </CallToAction>
            </div>
          </div>
        </div>
      </section>
    </main>
  </RootLayout>
);

export default Resources;
