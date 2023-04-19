<h1>Single Page Application</h1>

A page or web application will only load once, and navigating from one page to another page is done by javascript.

ReactJS is maintained by META.

Node.JS : Javascript Runner : helps executing JS.

<h1>Extensions and tools:</h1>

<h3>React Developer Tools:</h3>

It is google chrome extension which allow us to view react-component hierarchy in chrome developer tool.

<h3>Thunder client:</h3>

Alternative of postman where we can test out GET and POST request and check for API

<h3>ES7/React/Redux/GraphQL/React-Native Snippets:</h3>

We can easily import react components

<h3>Bracket Pair colorizer:</h3>

It changes bracket color according to opening and closing of tags.

<h3>Add Rename Tags:</h3>

Most of the customize tags gets automatic closing tag because of this !

<h3>npm create-react-app my-app</h3>
This will create react app named my-app but it will download all packages.

<h3>npx create-react-app my-app</h3>
This will create react app but it will not download all packages, save disk space.

<h3>npx create-react-app .</h3>
This will create react app without any name in global space but it could give naming convention error.

npm WARN : It provides some warnings which we can ignore

npm start : it will oprn react app in browser

Form: Component
Form Details: Props
Form elements: states

                         React Components
                             /     \
              Function Based         className based

<h1>JSX</h1>

<p>JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.</p>

<h3>Rules for JSX</h3>

1. Return a single root element
2. Close all tags
3. camelCase most of teh things

<h1> JS Export </h1>

<p>There are two types of export
   1. Default Export
   2. Named Export </p>

<p>Lets say we are making two files module1.mjs and module2.mjs

<u>module1.mjs</u>

import xyz, { a, c, d } from "./module2.mjs";

console.log(xyz);
console.log(a);
console.log(c);
console.log(d);

<u>module2.mjs</u>

const a = "Rohan";
const b = "Priyanka";
const c = "Shital";
const d = "Vaishnavi";

/_ It's a default export_/

export default b;

/_ It's a named export
named components should export as it is and import as it is._/

export {a};
export {c};
export {d};</p>

<h1> Props </h1>
<p> They are custom variables we pass toa components. It should be read only, we cannot chnage when it is fixed. </p>

<h4> Component -> Navbar.js </h4>

export default </br>
function Navbar(props) </br>
return { </br>
{props.title} </br>
{props.aboutText}  </br>
} </br>

<h4> Component -> App.js </h4>

<> </br>
function Navbar(props) </br>
return { </br>
{props.title} </br>
{props.aboutText}  </br>
} </br>

<h1> PropTypes </h1>

import propTypes from "prop-types"; </br>

Navbar.propTypes{ </br>
title: propTypes.string.isRequired, </br>
aboutText: propTypes.string.isRequired </br>
} </br>

// If propTypes have isRequired fields and we dont pass any inputs in props and we dont even have default then it will throw error!

Navbar.defaultProps{ </br>
title : 'Set Title here', </br>
aboutText: 'About text here' </br>
}</br>


