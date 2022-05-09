<p align="center">
<img src="./docs/mark.png" alt="OSS Port logo" width="60" height="60">
</p>

<h1 align="center">OSS Port</h1>

**OSS Port is now Open-Source Hub! We've moved to [a new repository](https://github.com/Codesee-io/opensourcehub).**

Welcome to OSS Port! This website and community connects open source maintainers and collaborators. Please join [our Discord channel](https://discord.gg/opensource) if you have any questions or just want to chat!

## Project setup

**Requirements:**

- Node v14 or above
- Yarn: `npm install --global yarn`

**First-time setup:**

1. check out this repository and navigate into it with `cd oss-port`
2. install the dependencies: `yarn`

🚀 When you've completed the setup steps, run the app:

```
yarn dev
```

### github.dev environment

You can also contribute to OSS Port without having to run the app on your local machine! Go ahead and check out the github.dev steps below.

If you have a JavaScript development environment set up already and prefer to run locally, the approach will be familiar.

1. [Create a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of the OSS Port.
1. Once on your fork's page, either press the full stop `.` key or replace `.com` in the location bar in your browser to `.dev`.

Now you're in the github.dev editor! Feel free to hop ahead to [our contributing section](#contributing).

For more information on the Github.dev editor, please [see their docs](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor).

## How to list your project

1. Get the project up and running first
1. Create your project's `.mdx` file:
   1. Create a new folder inside `/public/projects/` and name it the same as your GitHub handle or organization
   1. Add a new `.mdx` file to that folder, and give it the name of your public repo. For example,
      - if your project URl is: `https://github.com/Codesee-io/oss-port`
      - you would create: `/public/projects/Codesee-io/oss-port.mdx`.
   1. Copy/paste the contents of [`/app/projects/_template.mdx`](https://raw.githubusercontent.com/Codesee-io/oss-port/main/app/projects/_template.mdx) into that file
1. Fill out the information — most of it is optional, but extremely helpful for potential contributors. If you opt not to include the optional content, delete it from your template.
1. Add a 200x200 image for your organization to your folder, for example, `./app/projects/distributeaid/da.png`
1. Preview your changes by running `yarn dev`
1. When you're ready, open a PR!

### How to add a CodeSee Map to your project listing

Make it easier for contributors to onboard to your project! With a CodeSee Map, they can visualize the entire codebase, with features allowing them to explore system dependencies, add additional context to pull requests, and more.

To add a Map to your project:

1. Sign up for [CodeSee Maps](https://codesee.io) (there's no commitment or cost!)
1. Create a Map for your repo following [our instructions](https://docs.codesee.io/en/latest/)
1. Set your map to public!
1. Add an entry in your project's template for the Map (see example from Distribute Aid's Shipment Tracker project):

```
featuredMap:
  url: https://app.codesee.io/maps/public/848e3630-1650-11ec-8bc1-7d4a4822cc27
  description: Get a quick overview of the major areas of our repo
```

If you would like to display multiple maps you can add an entry called "maps"

```
maps:
  - url: https://app.codesee.io/maps/public/848e3630-1650-11ec-8bc1-7d4a4822cc27
    description: Get a quick visual overview of the major areas of our repo!
    subTitle: devdocs
  - url: https://app.codesee.io/maps/public/848e3630-1650-11ec-8bc1-7d4a4822cc27
    description: Another map!
    subTitle: testMap
```

That's it!

The CodeSee Map below is a good way to get familiar with the codebase:

[<img alt="CodeSee Map preview" src="docs/codebase-map.png" width="500">](https://app.codesee.io/maps/public/848e3630-1650-11ec-8bc1-7d4a4822cc27)

## Content

### Tag policy

Final tags are up to the maintainers of OSS Port. Your tags may be modified for the benefit of the community and to improve discoverability.

We use title-casing for tags. For example: "First-Timer Friendly, Social Activism, C#, JavaScript".

### How to remove your project from OSS Port

Open a PR to remove your project folder from this repository.

### Notes

- Please pin the exact version of dependencies
