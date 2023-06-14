<h1>Distinction between React.JS and Next.JS and what is the need to use Next.JS</h1>

<h2>Rendering</h2>

There are two types of rendering which are client-side rendering and server-side rendering. React.JS performs UI rendering on client-side and Next.JS performs server-side rendering but it provides flexibilty in rendering as we can decide that UI renders on client-side or server-side as per our need.


<h3>What is client-side rendering and server-side rendering and which is better</h3>

Client-side rendering happens on client's device when user requests a web page to server and then server respond as it sent back the HTML document and JavaScript code to client and browser executes that web page.

Server-side rendering renders the components on server side itself and then sent back the fully renered HTML document and web page to client which results in immediet reponse. This highlights important aspect of Web Development "SEO" (Search Engine Optimization).

<h3>SEO</h3>

Search Engine Optimization crawlers find difficulties indexing pages dynamically rendered on the client-side as result, the SEO performance of such pages may suffer as search engine may not fully comprehend their content and not rank them approprietly.

By using Next.JS this issue is resolved by sending pre-rendered code to client-side. This enables easy crawling and indexing of pages leading to improved SEO.

<h3>Why should we prioratise SEO?</h3>

SEO is crusial for optimizing a website's visibility and ranking in search engine results. By focusing on SEO we can achieve-

- Increased organic traffic
- Enhanced user experience
- creadibility and trustworthiness
- competitve advantage because of refined search result

Prioratising SEO can greatly impact success of your website and its online presence.

<h2>Routing</h2>

Routing is pretty simple in React.JS, we have to install "react-router-dom" package and make routes in one of the page. 

In Next.JS routing is based on file-based system, that means all the routing is handled by file-based system. All the folders in "app" directory becomes route and folder name becomes route path. eg.,

app
|-blog
|-about     https://localhost:3000/about
|-profile 
|-services

No need for external packages or complex configurations, we can create files for routes we want and open them in your application.

<h2>Ability to create Fullstack application</h2>
<h2> API Routes </h2>

Next.JS has an ability of enabling the creation of serverless functions to handle API requests. Serverless API's in Next.JS are a way of creating API endpoints without a need for traditional server. It allows us to build and deploy API's without managing server infrastructure or worrying about scaling their server as traffic increases. With tis feature we can create an API endpoints by simply creating a file route.js in a specific folder within the app directory, it directly corresponds to that route API endpoint.
Moving from React, Node.JS and Webpack resukted in removing 20K+ lines of code and 30+ dependencies while improving HMR (Hot Module Reloading) from 1.3s to 131ms which is 10 times less.

<h2>Automatic Code Splitting</h2>

Code splitting is a technique that breaks down large bundles of Javascript code into smaller, more manageble chunks that can be loaded as needed. This reduced initial load time of a website and optimizes the user's experience while browsing.
This process is manually handles in React.JS and we have to configure the code, we can do this by using "lazy" or "suspicious" function of React.
In Next.JS whole lot of these things happens automatically likw when we navigate from one page to another only code required for that page is loaded which results in faster subsequent page navigation.

