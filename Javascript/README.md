
<h1> Javascript </h1>

Javascript is invented by Brendan Eich who first developed Netscape-2 !
Javascript first developed for firefox but later on it is accepted by mostly every browser!

JavaScript can be both synchronous and asynchronous. Synchronous JavaScript operates in a sequential manner, where the code is executed line by line. Asynchronous JavaScript, on the other hand, allows the code to execute non-sequentially, with multiple functions running at the same time. This is achieved through the use of callbacks, promises, and async/await functions.

Everything in the Javascript is happened inside an "Execution Context"

Execution Context contains 2 things <strong> Memory (variable Environment) </strong> and <strong> Code (Thread of execution) </strong>

<h1>Execution Context</h1> {
<ul type = bullet>
<li> Whenever javascript code is run global execution context is created </li>
<li> In memoey varibles are stored in form of key:"value pair </li>
<li> Whenever function is created whole code of that function only is stored as value </li>
<li> Seperatly for a funcion execution context is created inside a <em>code</em> block now </li>
<li> Until code is executed the value stored for variable is "undefined", because only memory is created for that variable but we didn't assigned a value
</li>
<li> If we try to access something which is not initialized then console will throw "not defined".</li>
<li> As soon as code gets executed execution context will be automatically deleted</li>
</ul>
}

<h1> Window Object </h1>

Shortest code in JS is empty file, "window" is a globel object for globel execution context. <br>
"this" keyword is similar to window; <br>
this===window <br>
=> true <br>

eg: var x=27;<br>
console.log(window.x);<br>
console.log(this.x);<br>

We cannot access the variables inside a function globally;<br>
Javascript is loosly typed/ weekly typed language because variables are not attached with particular data type.<br>

<h1> Call Stack </h1>

Eveerything which is gona executed by javascript, importantly execution context is gonna stored inside call stack so synchronization would be maintained

<h1> DOM </h1>
{
<ul type = bullet>
<li> Document Object Model </li>
<li> Programming Interface of web document, represents web pages, we can use it to change or modifiy structure, style and content of web page. </li>
<li> document is a keyword.</li>
<li> document.firstElementchild => html
     document.firstElementchild.lastElementchild => body</li>
<li> we can use last and firstElementchild only </li>
<li> getElementsByTagName => we can use thus in case of accessing tag, as we know there could be multiple same tags, it also acts like an array
     document.getElementsByTagName("li");
HTMLCollection(3) [li.list, li.list, li.list]
document.getElementsByTagName("li").style.color="red";
VM606:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
   // This is the error because "li" tag used multiple times, and in the keyword its getElementsByTagName 
document.getElementsByTagName("li")[2].style.color="red";
     'red'</li>
<li> getElementsByClassName => we can access class properties by this, as we can have multiple similar classes, "elements" used here and even if single element in the class we have to access it as an array.
     document.getElementsByClassName("btn").style.color = "red";
VM1103:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:52
(anonymous) @ VM1103:1
     // It gives error because even if the only one class "btn" used here we have to use it like an array
document.getElementsByClassName("btn")[0].style.color = "red";
</li>
<li> getElementbyID => this can change styling/structure by ID and as ID is uniquein the keyword we can say element only, no pural form 
     document.getElementById("text").style.color="purple";
'purple'</li>
<li> querySelector can use tag, class or id but we have to follow certain instructions, like for id we have to use # and for class we have to use 
 <br>   
document.querySelector("h1");  
 <p> h1 id=​"text" style=​"color:​ purple;​" ​Hello​ /h1 </p> <br>
document.querySelector("text"); <br>
null <br>
document.querySelector("#text"); <br>

<p> h1 id=​"text" style=​"color:​ purple;​" Hello​ /h1 </p>​<br>
document.querySelector("list"); 
null <br>
document.querySelector(".list"); 
<li class=​"list">​…​</li>​::marker​<a href=​"https:​/​/​www.google.com">​Vaishnavi​</a>​</li>​ <br>

// We can use hierarchical tag <br>
document.querySelector("li a"); <br>
<a href=​"https:​/​/​www.google.com">​Vaishnavi​</a>​ <br>

document.querySelector("a"); <br>
<a href=​"https:​/​/​www.google.com">​Vaishnavi​</a>​ <br>

// tag with class, this will give all the elements with li <br>
document.querySelector("li .item"); <br>

// ID with tag <br>
document.querySelector("#list a"); <br>
<a href=​"https:​/​/​www.google.com">​Vaishnavi​</a>​ <br>

// ID with class, this will give only first class with that className <br>
document.querySelector("#list .item"); <br>

<li class="item">...</li> <br>

// querySelectorAll <br> <br>
// for every tag with the same class it will give us an array <br>

document.querySelectorAll("#list .item"); <br>
NodeList(3) [li.item, li.item, li.item] <br>

// this is unproper way to acces the item <br>
document.querySelectorAll("#list .item").style.color="red; <br>

VM2061:1 Uncaught SyntaxError: Invalid or unexpected token <br>

// this is the correct way <br>
document.querySelectorAll("#list.item")[2].style.color="red"; <br>
red <br>

// this will change only bullet color of first li <br>
document.querySelector("li").style.color="red"; <br>
'red' <br>

// this will change color of particular element <br>
document.querySelector("li a").style.color="red"; <br>
'red' <br>

</li>
</ul>
}

<h3> Maniplating Web page via Javascript </h3><br>

// Refer HTML DOM styling properties<br>
document.querySelector("button").style.outline = "thin dotted #0000FF";<br>
'thin dotted #0000FF' <br>

document.querySelector("button").style.backgroundColor = "yellow";<br>
'yellow' <br>

<h3> The Seperation of concerns : The structure VS The Style VS The Behaviour </h3> <br>

// Adding huge class styling inside css;<br>
// classList gives classes<br>

document.querySelector("h1").classList;<br>
DOMTokenList ['huge', value: 'huge']<br>

// classList have 3 main attributes add, remove, toggle;<br>
document.querySelector("h1").classList.add("huge");<br>
undefined<br>
document.querySelector("h1").classList.remove("huge");<br>
undefined<br>
// Toggle will basically like if its enabled then disable it and vice versa <br>
document.querySelector("h1").classList.toggle("huge");<br>
true<br>
document.querySelector("h1").classList.toggle("huge");<br>
false<br>
document.querySelector("h1").classList.toggle("huge");<br>
true<br>
document.querySelector("h1").classList.toggle("huge");<br>
false<br>

<h3> Manipulating text and attributes </h3><br>

//innerHTML and textContent reads the content inside a tag <br>
// The only difference is innerHTML will read content with other tags inside a input tag and textContent will only read a text<br>

document.querySelector("h1").innerHTML;<br>
'<strong>Hello</strong>'<br>
document.querySelector("h1").textContent;<br>
'Hello'<br>
document.querySelector("h1").innerHTML="<em>Good Bye</em>";<br>
'<em>Good Bye</em>'<br>
document.querySelector("h1").textContent;<br>
'Good Bye'<br>

// attribute property will give an attributes attached with given tag <br>
document.querySelector("a");<br>
<a href=​"https:​/​/​www.google.com">​Vaishnavi​</a>​<br>

document.querySelector("a").attribute;<br>
NamedNodeMap {0: href, href: href, length: 1}<br>

// getAttribute will give a value of an attribute of specific tag <br>
document.querySelector("a").getAttribute("href");<br>
'https://www.google.com'<br>

// setAttribute will set a value of an attribute of specific tag<br>
document.querySelector("a").setAttribute("href", "https://www.bing.com");<br>
undefined <br>

<h3> Higer Order Function</h3>

// Higher Order Function <br>
// The function which can take other functions as an input <br>

function add(num1, num2) {
return num1 + num2;
} <br>

function subtract(num1, num2) {
return num1 - num2;
}
<br>
function multiply(num1, num2) {
return num1 \* num2;
}
<br>
function divide(num1, num2) {
return num1 / num2;
}
<br>
function calculator(num1, num2, operator) {
return operator(num1, num2);
}
<br>
console.log(calculator(2, 3, subtract));
<br>

<h3> Event Listener</h3>

// Impliment a functionality, if we clicked on any button it should pop up the message <br>

var buttonCount = document.querySelectorAll(".drum").length;<br>
for (var i = 0; i < buttonCount; i++) {<br>
document.querySelectorAll(".drum")[i].addEventListener("click", function () {<br>
alert("I got clicked!");<br>

    // what to do when click <br>

});<br>
}<br>

/\* document.querySelector("button").addEventListener("click", drumRoll); <br>
// when we use a function here we didn't add () because it will act first even before the event<br>

function drumRoll() {<br>
alert("I got clicked!");<br>
} \*/<br>

# <<<<<<< HEAD

<h3> Javascript Objects </h3>

var houseKeeper = { <br>
yearsOfExperience: 12,<br>
name: "Jane:",<br>
cleaningReport: ["bathroom", "lobby", "bedroom"]<br>
}<br>
undefined<br><br><br>

console.log(houseKeeper.name);<br><br>
Jane:<br>

console.log(houseKeeper.yearsOfExperience);<br>
12<br>

// Constuctor Fuction<br>
// Fuction Name should start with Capital letter (PascalCase)<br>

function HouseKeeper (yearsOfExperience, name, cleaningReport){<br>
this.yearsOfExperience=yearsOfExperience;<br>
this.name=name;<br>
this.cleaningReport=cleaningReport;<br>
}<br>
undefined<br>

var houseKeeper1=new HouseKeeper(12,"Rani",["bathroom","bedroom","lobby"]);<br>
undefined<br>

houseKeeper1;<br>
HouseKeeper {yearsOfExperience: 12, name: 'Rani', cleaningReport: Array(3)}<br>

var houseKeeper2=new HouseKeeper(10,"shanti",["bathroom","bedroom","lobby"]);<br>
undefined<br>

var houseKeeper3=new HouseKeeper(15,"subh",["bathroom","bedroom","lobby"]);<br>
undefined<br>

houseKeeper2<br>
HouseKeeper {yearsOfExperience: 10, name: 'shanti', cleaningReport: Array(3)}<br>

houseKeeper3;<br>
HouseKeeper {yearsOfExperience: 15, name: 'subh', cleaningReport: Array(3)}<br>

houseKeeper2.name;<br>
'shanti'<br>

<h3> Methods in Javascript </h3><br>

function HouseKeeper (yearsOfExperience, name, cleaningReport){<br>
this.yearsOfExperience=yearsOfExperience;<br>
this.name=name;<br>
this.cleaningReport=cleaningReport;<br>
this.clean = function(){<br>
alert("Cleaning in progress");<br>
}<br>
}<br>
houseKeeper3.clean();<br>

<h3> Callback events & How to respont to Events</h3>

function anotherEventListner (typeofEvent, callback){ <br>

    var eventThatHappened = { <br>
        eventType: "keydown , <br>
        keyThatPressed : "p", <br>
        durationOfkey : 2 <br>
    } <br>

    if(eventThatHappened.eventType === typeofEvent){ <br>
        callback(eventThatHappened); <br>
    } <br>

} <br>
undefined <br>  
anotherEventListner("keydown", function(event){ <br>
console.log(event); <br>
}); <br>
VM812:2 {eventType: 'keydown', keyThatPressed: 'p', durationOfkey: 2}durationOfkey: 2eventType: "keydown"keyThatPressed: "p"[[Prototype]]: Object <br>
undefined <br>
debugger; <br>
anotherEventListner("keydown", function(event){ <br>
console.log(event); <br>
}); <br>

<h3> Keyboard Event Listners </h3>
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

<h3> Adding Animation to Buttons </h3>

function buttonAnimation(currentkey) { <br>
// detecting current button <br>
var activeButton = document.querySelector("." + currentkey); // .w or .a (we are using class to detect the current key)<br>
// adding class pressed by classist<br>
activeButton.classList.add("pressed");<br>

// going back to original condition after 1 sec by removing the same class<br>
setTimeout(function () {<br>
activeButton.classList.remove("pressed");<br>
}, 100);<br>
}<br>

// in style.css<br>
.pressed {<br>
box-shadow: 0 3px 4px 0 #dbedf3;<br>
opacity: 0.5;<br>
}<br>

<h3> JS Engine </h3>

<ul type="bullet">
<li> Everything we wrote in JS happens inside JS Engine</li>
<li> There is Callstack JS Engine </li>
<li> Event Loop, API, Callback Queue, Microtask Queue exits outside of browser</li>
<li> "SpiderMonkey" was a first JS Engine used by Firefox </li>
<br>
<li> Code </li>
<li> Parsing -> Syntax Parser -> AST(Abstarct Syntax Tree) </li>
<li> Compilation </li>
<li> Execution </li>
<li> Example of v8 Engine which is used by Google Chrome or Node JS</li>
<li> JS Code->parsing->AST->Interpretor->Compiler->optimize->Byte Code->Interpretor</li>
<li>v8</li>
<li>Interpretor - Ignition</li>
<li>Compiler - Turbofan</li>
<li>Garbage Collector - Orinoco(M&S), oilpay</li>
<li>Mark and Sweep Algorithm used for garbage collection for fast execution</li>
</ul>

<h1> CallBack Hell and Inversion Control </h1>

Javascript is a symchronous and asynchronous both language, to use asynchronous javascript we use callback functions but due to excesive nesting it may cause callback hell which is also called as Pyramid of doom. It isactually difficult to maintain such code and our code grows horizontally instaed of vertically.

Callback hell is a term used to describe a situation in asynchronous programming where the code becomes difficult to read and maintain due to excessive nesting of multiple callbacks. This occurs when one callback function is called within another callback function, resulting in a long chain of nested callbacks. This can create complex and convoluted code that is difficult for humans to read, debug, and maintain. It can also make it difficult to handle errors and lead to poor performance.

Inversion of control problem in callback hell in JavaScript occurs when a function's control flow is inverted or out of order due to the use of callback functions. This can make it difficult to read and maintain the code, and can lead to bugs and errors. In callback hell, callbacks are nested within each other, often making it harder to understand the execution order of the entire code. This problem can be solved by using Promise objects or async/await functions, which provide better control flow and readability.</br></br>

eg: If we want to place an order we have to follow following steps</br>
1) create an order
2) making a payment
3) our order summary
4) updating our wallet

const cart= ["shoes", "shirt", "kurta"] </br>
api.createOrder(cart, function (){ </br>
 api.proceedToPayment(function(){ </br>
  api.showOrderSummary(function(){ </br>
   api.updateWallet(); </br>
   }) </br>
   }) </br>
   }); </br>

<h1> Promises </h1>

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.  </br>

A Promise is in one of these states: </br>

pending: initial state, neither fulfilled nor rejected.  </br>
fulfilled: meaning that the operation was completed successfully.  </br>
rejected: meaning that the operation failed.  </br>

To handle issues like callback hell, inversion of control we use promises, promises is an object which hold a data. To handle inversion of control we use following code; </br>
eg: const promise = createOrder(cart);  </br>
promise.then ( function (orderId) { </br>
proceedToPayment(orderId); </br>
}); </br>

In above code:
promise :-  is a promise object containing no data so, {data: undefined}
after some time this object will get filled with desired value {data: objectData}

we are attching a function to promise, then only after promise will contain some data inside it then only it will execute!

Benefits:
1) Promises execute function inside it only once.
2) We have control of function with us and assurance of execution.

eg: const GITHUB_API = "-----------------" </br>
    const user = fetch(GITHUB_API); </br>
    here user is a promise so initially user: undefined and after some time when it fetches a data, </br>
    user : promise </br>
    [[prototype]] = promise </br>
    [[promiseStatus]] = "pending" </br>
    [[promiseResult]] = undefined </br>
    
<h4> Different Behaviour of Promises and Reason behind </h4> </br>
console.log(user);  </br>

console: promise {<pending>}</br>
    [[prototype]] = promise </br>
    [[promiseStatus]] = "fullfilled" </br>
    [[promiseResult]] = Response </br>

