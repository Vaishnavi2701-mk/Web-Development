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
|-about https://localhost:3000/about
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

Next.JS leverages server side rendering to enhance the loading speed results in good SEO. So all the next.JS components inside "app" directory are react server-side components. To convert a server-side component into client side we have to simply add 'use client'; on top of the file. Mostly react hooks and state management happens on client-side so we have to convert that component into client-side to use "useState", "useEffect".

<h1> File & Folder Structure </h1>
<h2> Creating Next.JS app & Importing Dependencies </h2>

(base) vaishnavimokadam@Vaishnavis-MacBook-Air share_prompts % npx create-next-app@latest ./ </br>
✔ Would you like to use TypeScript with this project? … No / Yes </br>
✔ Would you like to use ESLint with this project? … No / Yes </br>
✔ Would you like to use Tailwind CSS with this project? … No / Yes </br>
✔ Would you like to use `src/` directory with this project? … No / Yes </br>
✔ Use App Router (recommended)? … No / Yes </br>
✔ Would you like to customize the default import alias? … No / Yes </br>
✔ What import alias would you like configured? … @/\* </br>

<img width="183" alt="Screenshot 2023-06-15 at 10 16 58 AM" src="https://github.com/Vaishnavi2701-mk/Web-Development/assets/89184872/2cc969b8-313b-4769-bf5a-62a898c0592b">

<h1> When to use Server VS Client Components </h1>

https://nextjs.org/docs/getting-started/react-essentials

> > > > > > > refs/remotes/origin/main

<h1>Routing and special Next.JS file</h1>

In case of react we have to import "react-router-dom" and structure will look like this;

<Router>
<Routes>
  <Route path="/" element = {<Home/>} />
  <Route path="about" element = {<About/>} />
  <Route path="posts" element = {<Posts/>} />
       <Route path="new" element = {<NewPost/>} />
</Routes>
</Router>

But in case of Next.JS, we have simply create a folder named same as path to create a route inside app, and similar for nested routing.
Consider a blog page where there is a page blog and a new page inside blog as "new-post".

There is a concept known as "Dynamic Routing" which is a flexible system where we can create dynamic web pages based on variable names and data. Considering previous example.

/post/:postID
/post/blog-post-1
/post/blog-post-2
/post/blog-post-3

Next.JS follows simple and similar process but this time the folder name should be inside "[]" to indicate that it is dynamic route.
<img width="158" alt="Screenshot 2023-06-15 at 11 29 42 AM" src="https://github.com/Vaishnavi2701-mk/Web-Development/assets/89184872/2c7ef390-dec3-49cf-b54f-ac901a904f2e">

Then we can create layout.js file inside a posts directory so that we can share UI between the components and "error.js" file will show all the errors but it must be client-side component.

<h1>Data Fetching</h1>

1. Server Side Rendering (SSR)
2. Server Site Generation (SSG)
3. Incremental Static Generation (ISR)

<h4>1. Server Side Rendering (SSR)</h4>

async function page({params}){
const res = await fetch(
`https://jsonplaceholder.typicode.com/posts/${params.id}`,
{cache: 'no-store'} // simply instructing to no store cache
);
const data = await res.json();
}

<h4>2. Server Side Generation (SSG)</h4>

By default Next.JS uses this.

async function page({params}){
const res = await fetch(
`https://jsonplaceholder.typicode.com/posts/${params.id}`,
);
const data = await res.json();
}

<h4>3. Incremental Static Generation (ISR)</h4>

async function page({params}){
const res = await fetch(
`https://jsonplaceholder.typicode.com/posts/${params.id}`,
{next: {revalidate:10}}
);
const data = await res.json();
}

ISR uses both the functionalities of SSR and SSG that it will cache the data after specific amount of time by using this {next: {revalidate:10}}

Next.JS covers all the features of a traditionl server like, middleware, parsing authentication checks and even serverless funcyions which simplifies the deployment process and scaling of API routes. 

There are two methods to craete route handlers, file based handlers and manually creating routes inside app directory. But directly creating routes.js is bad practise as Next.JS wouldn't br able to kow that it is a regular frontend-page or backend API. Thus keeping all the backend logic and API endpoints inside api folder is more better.


Next.JS introduce Metadata API and it provides two type of metadata.

1. Static Metadata
2. Dynamic Metadata

<h1>1. Static Metadata</h1>

export const metadata = {
    title: 'Home',
};

Output: 

<head>
 <title>Home</title>
</head>

export default function Page(){
    return (
        <h1>My Normal Next.js page with Static Metadata</h1>
    )
}

<h1>2. Dynamic Metadata</h1>

export async function generateMetadata({params, searchParams}){
    const product = await getProduct(params.id);
    return {
        title: product.title
    }
}

Output: 

<head>
 <title>My Unique Product</title>
</head>

export default function Page(){
    return (
        <h1>My Normal Next.js page with Dynamic Metadata</h1>
    )
}