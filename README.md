# OSS Port

We’re thrilled to have you in Port. It's super easy to get started, and should only take about 10 minutes.

## Step 1: Getting up and running

You can put your project up on Port without having to run the app! Go ahead and check out the github.dev steps below.

If you have a JavaScript development environment set up already and prefer to run locally, the approach will be familiar.

### github.dev environment

1. [Create a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of the OSS Port.
1. Once on your fork's page, either press the full stop `.` key or replace `.com` in the location bar in your browser to `.dev`.

Now you're in the github.dev editor! Feel free to hop ahead to [our contributing section](#contributing).

For more information on the Github.dev editor, please [see their docs](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor).

### Local development (optional)

1. Clone this repository to your machine
1. Inside the project directory, install the dependencies using [Yarn](https://classic.yarnpkg.com/en/):

   ```shell
   yarn
   ```

1. Run the project locally:

   ```shell
   yarn dev
   ```

1. You can now view the project in your browser at http://localhost:8000

## Contributing

### Step 2: List your project

1. Follow the above setup steps
1. Create your project's `.mdx` file
   1. Create a new folder inside `/projects` and name it the same as your GitHub handle or organization
   1. Add a new `.mdx` file to that folder, and give it the name of your public repo. For example,
      - if your project were: `github.com/Codesee-io/oss-port`
      - you would create: `/projects/Codesee-io/oss-port.mdx`.
   1. Copy/paste the contents of [`projects/_template.mdx`](https://raw.githubusercontent.com/Codesee-io/oss-port/main/projects/_template.mdx) into that file
1. Fill out the information — most of it is optional, but extremely helpful for potential contributors. If you opt not to include the optional content, delete it from your template.
1. Add a 200x200 image for your organization to your folder, for example, `./projects/distributeaid/da.png`
1. Preview your changes by running `yarn dev`
1. When you're ready, open a PR!

### Step 3: Adding a CodeSee Map to your project listing

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

### Tag policy

Final tags are up to the maintainers of OSS Port. Your tags may be modified for the benefit of the community and to improve discoverability.

We use title-casing for tags. For example: "First-Timer Friendly, Social Activism, C#, JavaScript".

### How to remove your project from OSS Port

Open a PR to remove your project folder from this repository.

### Notes

- Please pin the exact version of dependencies
