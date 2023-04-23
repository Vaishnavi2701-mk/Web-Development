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
//<>
<p> Navbar title = "textutils" aboutText = "About Textutils"  </p>
//</>

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

<h1> Understanding state and handling events in React </h1>

 const handleOnChange = (event) => {
    //console.log("onChange");
    setText(event.target.value);
  };
  
  setText(event.target.value); ----> This function is then called with the event object as its argument, allowing it to access the current value of the input field using event.target.value. and then we can change a text.
  
  
<h1> React Hooks </h1>

React Hooks are a set of functions that allow you to use state and other React features in functional components. Prior to the introduction of Hooks in React 16.8, state could only be managed in class components, which can be more complex and harder to read than functional components.

React Hooks provide an alternative way to manage state and side effects (such as data fetching or event listeners) in functional components. They allow you to use React features such as state, context, and lifecycle methods without the need for class components.

Some of the most commonly used React Hooks include:

useState(): Allows you to add state to a functional component, and update that state in response to user actions or other events.
useEffect(): Allows you to add side effects to a functional component, such as fetching data from an API, setting up event listeners, or updating the document title.
useContext(): Allows you to access data stored in a context object, which can be used to pass data down the component tree without the need for props.
useReducer(): Allows you to manage state using a reducer function, which can be helpful for more complex state management scenarios.
Using Hooks can make your code simpler, more modular, and easier to test. They are widely used in modern React applications, and are a key part of writing reusable and maintainable code.

<h1> Why we use 'npm run build' </h1>

This command is often used in web development projects that use JavaScript, HTML, and CSS.

When you run npm run build, it typically executes a build script that is defined in the package.json file of your project. The build script is responsible for creating a production-ready version of your web application or library.

Here are some common tasks that a build script might perform:

Compiling and bundling code: The build script may use tools like webpack or rollup to bundle all of your JavaScript files into a single file. It may also compile other files like CSS, SCSS, or TypeScript into their respective formats.

Optimizing assets: The build script may optimize your images or fonts to reduce their file size and improve load times.

Running tests: The build script may run automated tests to ensure that your application or library is working correctly.

Creating a production-ready version: The build script may create a folder with all the files necessary to deploy your application or library to a web server. This folder typically includes the compiled and optimized code, as well as any necessary configuration files.

In general, running npm run build is an important step in preparing your web application or library for deployment to a production environment.
