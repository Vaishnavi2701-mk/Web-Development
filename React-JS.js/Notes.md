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

<h1> Main difference between 'npm create-react-app my-app' and 'npx create-react-app my-app' </h1>

Both npm create-react-app and npx create-react-app are commands that can be used to create a new React application.

The main difference between the two is in how they are executed:

npm create-react-app is used when you have already installed create-react-app globally on your system using npm install -g create-react-app. When you run npm create-react-app, it will use the globally installed version of create-react-app to generate a new React application in your current working directory.

npx create-react-app is used when you do not have create-react-app installed globally on your system. When you run npx create-react-app, it will download the latest version of create-react-app from the npm registry and use it to generate a new React application in your current working directory. This means that you do not need to install create-react-app globally beforehand, which can be convenient if you only need to generate a new React application once or infrequently.

In summary, if you have already installed create-react-app globally on your system, you can use npm create-react-app to generate a new React application. If you do not have create-react-app installed globally, you can use npx create-react-app to download and use the latest version of create-react-app to generate a new React application.

<h1> Function based Components </h1>

Function-based components are a type of component in React that are defined using JavaScript functions. They are also commonly referred to as "functional components". Function-based components were introduced in React 16.8 as part of the Hooks API.

Here's an example of a simple function-based component:

jsx
Copy code
import React from 'react';

function Greeting(props) {
  return h1 Hello, {props.name}! /h1;
}
In this example, the Greeting component takes in a name prop and returns an h1 element with the text "Hello, {name}!".

Function-based components have a few key features:

They are simple and easy to read: Since they are just JavaScript functions, they tend to be more concise and easier to understand than class-based components.

They can be more performant: Function-based components can be optimized to be more performant than class-based components because they do not have the overhead of a class instance.

They work well with hooks: Function-based components are the recommended way to use hooks, which are a powerful feature in React that allow you to add state and other React features to function-based components.

Overall, function-based components are a powerful and useful feature in React that can simplify your code and improve performance.


<h1> Class based component </h1>

Class-based components are a type of component in React that are defined using JavaScript classes. They have been used in React since its inception and were the primary way to define components in React before the introduction of function-based components.

Here's an example of a simple class-based component:

jsx
Copy code
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return h1 Hello, {this.props.name}! h1;
  }
}
In this example, the Greeting component extends the Component class from React and defines a render method that returns an h1 element with the text "Hello, {name}!".

Class-based components have a few key features:

They have a state: Class-based components can define a state that can be updated using setState, which triggers a re-render of the component.

They have lifecycle methods: Class-based components have lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount that can be used to perform side effects like fetching data or cleaning up resources.

They can use props and context: Class-based components can access props passed down from a parent component and can also access the React context.

However, with the introduction of the Hooks API in React 16.8, function-based components have become the recommended way to define components in most cases. Function-based components are simpler and easier to read than class-based components, and can also be more performant.

Overall, while class-based components are still a useful and important feature in React, they are becoming less common in favor of function-based components and hooks.

<h1> State in class-based components </h1>

In React, class-based components are a way to create reusable UI components with their own state and lifecycle methods. Here's an example of how to define a class-based component in React:

javascript
Copy code
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

 render() {
    return (
      <div>
        h1 My Component /h1
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;

state is defines as this.state inside super constructor and then it can be set as this.setState inside a function.
