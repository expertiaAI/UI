# Design System of Expertia.ai

<p>
    <a href="https://www.expertia.ai/" >
      <img alt="Expertia.ai-design-system" width="350" style="background-color:white;" src="https://www.expertia.ai/expertiaLogotext.png">
    </a><br>
    Use Tailwind CSS to build the components
</p>

---

## Getting started

By integrating this package as a plugin to your current Tailwind CSS project, you can expedite website development through the utilization of a collection of web components constructed with the utility classes provided by Tailwind CSS.

### Install using NPM

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow" >Node.js</a> and <a href="https://tailwindcss.com/" rel="nofollow" >Tailwind CSS</a> installed.

1. Install all dependencies using NPM by running the following command:

```bash
npm install experti.ai/ui
```

---

Here's an example how you can import and create a new Modal component inside JavaScript:

```javascript
import { Button } from "@sankethexpertia/expertia-ui";

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



