<h1> SASS </h1>

SASS - Syntactically Awesome Stylesheet.<br>

SASS is an extention of CSS which increases the ability and features of CSS than any other CSS extension.<br>

We cannot directly link SASS into HTML as CSS; we have to process SASS in CSS with the help of task runner like GULP.<br>

We can create our own CSS liabrary like Bootstrap, Tailwind and use it in our personal projects by customizing it.<br>

The extension it uses is .scss or .sass but they use quite different syntax.<br>

Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.<br>

Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that gives your CSS superpowers.</br>

Let's face it: writing CSS can be difficult at times, especially in today's world of increasingly complex user interfaces.</br>

And many times, you'll find that you're repeating yourself often.</br>

Sass comes to the rescue in this situation. It helps you stick to the DRY (Do Not Repeat Yourself) philosophy when writing CSS.</br>

Sass provides a compiler that allows us to write stylesheets in two different syntaxes, indented(.sass) and SCSS.</br>

<h1> Indented syntax </h1>

This is the older syntax that is indented, and gets rid of the curly braces and semi-colons. It has a file extension of .sass.

nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    text-decoration: none

<h1> SCSS syntax </h1>

This is the newer and more popular syntax. It is essentially a subset of the CSS3 syntax. This means that you can write regular CSS with some additional functionalities.

Due to its advanced features it is often termed as Sassy CSS. It has a file extension of .scss.

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }

  a {
    display: block;
    text-decoration: none;
  }
}

<h1> How Does Sass Work? </h1>

Sass works in such a way that when you write your styles in a .scss file, it gets compiled into a regular CSS file. The CSS code is then loaded into the browser.

That is why it's called a Preprocessor.

<h1> Why should you use Sass? </h1>

Easy to learn: If you are familiar with CSS already, then you'll be glad to know that Sass actually has a similar syntax, and so you can start using it. 

Compatibility: It is compatible with all versions of CSS. So, you can use any available CSS libraries.

Saves time: It helps reduce the repetition of CSS, because of its powerful features.

Reusable code: Sass allows for variables and chunks of code (mixins) that can be reused over and over again. This helps you save time and makes you able to code faster.

Organized Code: Sass helps keep your code organized by using partials.

Cross Browser Compatibility: Sass gets compiled into CSS and adds all the necessary vendor prefixes so you don't have to worry about manually writing them out.

We can also use operators.


<h1> Ways to compile Sass </h1>

There are different ways of compiling Sass files which are:

VS Code Extension
Install using NPM globally
Install using open source apps such as Compass.app, Live Reload, and Koala.
Install using Homebrew (for MacOS)
