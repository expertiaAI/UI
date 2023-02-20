# Design System of Expertia.AI

<p>
    <a href="https://www.expertia.ai/"  >
      <img alt="Expertia.ai-design-system" style="background-color:white;" width="200" src="https://avatars.githubusercontent.com/u/77336561?s=200&v=4">
    <h1>Expertia.Ai</h1></a><br>
    Use Tailwind CSS to build the components
</p>

---

## Getting started

By integrating this package as a plugin to your current Tailwind CSS project, you can expedite website development through the utilization of a collection of web components constructed with the utility classes provided by Tailwind CSS.

### Install using NPM

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow" >Node.js</a> and <a href="https://tailwindcss.com/" rel="nofollow" >Tailwind CSS</a> installed.

<!-- 1. Install all dependencies using NPM by running the following command:

```bash
npm install -S "git+https://expertiaai/ui.git" 
```

--- -->

1. Authenticate to GitHub Packages.

    1. Get the `personal access token` 
    
    -- In the upper-right corner of any page, click your profile photo, then click `Settings`.
    -- In the left sidebar, click  `Developer settings`.
    -- In the left sidebar, under  Personal access tokens, click Fine-grained tokens.
    -- Click `Generate new token`.
    -- Under Token name, enter a name for the token.
    -- Select `repo, write and read`
    -- Press `Generate Token`.
    -- Copy the Token Generated.

    2. Create a `.npmrc file` and add the personal access token

    ```
    //npm.pkg.github.com/:_authToken=TOKEN
    ```

    3. To authenticate by logging in to npm, use the `npm login` command, replacing USERNAME with your GitHub username, TOKEN with your personal access token (classic), and PUBLIC-EMAIL-ADDRESS with your email address.

    ````
    npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://npm.pkg.github.com

    > Username: USERNAME
    > Password: TOKEN

    ````


2. Create a .npmrc file in root directory to include specifying GitHub Packages URL and the namespace where the package is hosted.

````
@expertiaai:registry=https://npm.pkg.github.com
````

3. Configure package.json in your project to use the package you are installing. To add your package dependencies to the package.json file for GitHub Packages, specify the full-scoped package name, such as @my-org/server.

````
{
  "name": "@my-org/server",
  "version": "1.0.0",
  "description": "Server app that uses the <organization_name>/<package_name> package",
  "main": "index.js",
  "author": "",
  "license": "MIT",
  "dependencies": {
    "expertiaai/ui": "1.0.0"
  }
}
````

4. Install package

````
npm install
````

Here's an example how you can import and create a new Modal component inside JavaScript:

1. Buttons

```javascript
import { Button } from "@expertiaai/ui";

function Example() {
  return (
    <div>
      <p>Primary Large</p>
      <Button><p>Button primary</p></Button>

      <p>Primary Small </p>
      <Button small>Button Small</Button>

      <p>Secondary Large</p>
      <Button secondary>Button Secondary</Button>

      <p>Secondary Small</p>
      <Button secondary small>Button Secondary</Button>
    </div>
  );
}
```



