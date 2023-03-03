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
   -- In the left sidebar, click `Developer settings`.
   -- In the left sidebar, under Personal access tokens, click Fine-grained tokens.
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

   ```
   npm login --scope=@expertiaai --auth-type=legacy --registry=https://npm.pkg.github.com

   > Username: USERNAME
   > Password: TOKEN

   ```

2. Edit the .npmrc file in root directory to include specifying GitHub Packages URL and the namespace where the package is hosted.

```
@expertiaai:registry=https://npm.pkg.github.com
```

3. Configure `package.json` in your project to use the package you are installing. To add your package `dependencies` to the `package.json` file for GitHub Packages, specify the full-scoped package name, such as @my-org/server.

```
{
  "name": "@my-org/server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "author": "",
  "license": "MIT",
  "dependencies": {
    "@expertiaai/ui": "github:expertiaai/ui"
  }
}
```

4. Install package

```
npm install
```

Here's an example how you can import and create a new component inside JavaScript:

1. Buttons

```javascript
import { Button } from "@expertiaai/ui";

function Example() {
  return (
    <div>
      <p>Primary Large</p>
      <Button>
        <p>Button primary</p>
      </Button>

      <p>Primary Small </p>
      <Button small>Button Small</Button>

      <p>Secondary Large</p>
      <Button secondary>Button Secondary</Button>

      <p>Secondary Small</p>
      <Button secondary small>
        Button Secondary
      </Button>

      <p>Disabled Large</p>
      <Button disabled>Button Secondary</Button>

      <p>Disabled Small</p>
      <Button disabled small>
        Button Secondary
      </Button>
    </div>
  );
}
```

<br />
<p align="center">
<img width="800" height=auto src="Buttons.png" alt="Types of buttons">
</p>

Primary Large Button is the Default Button,
`samll` - converts to Small button,
`secondary` - converts to Secondary (outlined) Button,
`disabled` - converts to Disabled Button.

2. Checkbox

```javascript
import { Checkbox1 } from "@expertiaai/ui";

function Example() {
  return (
    <div className="m-auto w-[70vw] mt-10 grid grid-cols-3">
      <div className="flex justify-center flex-col items-center">
        <div>Check Box - default unchecked</div>
        <Checkbox1 />
      </div>
      <div className="flex justify-center flex-col items-center">
        <div>Check Box - default checked</div>
        <Checkbox1 defaultChecked />
      </div>
    </div>
  );
}
```

<br />
<p align="center">
<img width="800" height=auto src="checkbox.png" alt="Types of buttons">
</p>

checkbox is not checked initially, `defaultChecked` will make the checkbox checked on bydefault.

3. Chips

```javascript
import { Chips } from "@expertiaai/ui";

function Example() {
  return (
    <div className="m-auto w-[70vw] mt-10 grid grid-cols-3">
      <div className="flex justify-center flex-col items-center">
        <div>default chip</div>
        <Chips>Example</Chips>
      </div>

      <div className="flex justify-center flex-col items-center">
        <div>chip with avatar</div>
        <Chips avatar="https://images.unsplash.com/photo-1677607633013-b733166ab535?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60">
          Example
        </Chips>
      </div>

      <div className="flex justify-center flex-col items-center">
        <br></br>

        <div>deletable default chip </div>
        <Chips deletable>Example</Chips>
      </div>

      <div className="flex justify-center flex-col items-center">
        <br></br>

        <div>deletable chip with avatar </div>
        <Chips
          deletable
          avatar="https://images.unsplash.com/photo-1677607633013-b733166ab535?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        >
          Example
        </Chips>
      </div>
    </div>
  );
}
```

<br />
<p align="center">
<img width="800" height=auto src="chips.png" alt="Types of buttons">
</p>

Default chips are not deletable and don't have any avatars, can add `avatar` and `deletable` tags.


4. DropDown

```javascript
import { DropDown } from "@expertiaai/ui";

function Example() {
  const CompanySizeOptions = [
    "2-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1001-5000 employees",
  ];
  return (
    <div className="flex w-full justify-center item-center">
      <DropDown className="mx-24" options={CompanySizeOptions}>
        DropDown Selection
      </DropDown>
      <DropDown
        options={CompanySizeOptions}
        onValueChange={(e) => console.log(e)}
      >
        DropDown Selection
      </DropDown>
    </div>
  );
}
```

<br />
<p align="center">
<img width="800" height=auto src="dropdown.png" alt="Types of buttons">
</p>

The options for this dropdown are being passed as an array of strings through the "options" prop.The prop "onValueChange" that is being used to capture the value of the selected option.

5. Input

```javascript
import { Input } from "@expertiaai/ui";

function Example() {
  return (
    <div>
      <Input className="w-96" placeholder="Write your input here" />
    </div>
  );
}
```

<br />
<p align="center">
<img width="800" height=auto src="input1.png" alt="Types of buttons">
</p>

The options for this dropdown are being passed as an array of strings through the "options" prop.The prop "onValueChange" that is being used to capture the value of the selected option.


