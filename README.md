# Web-Development

<h1> Javascript </h1>

Javascript is invented by Brendan Eich who first developed Netscape-2 !
Javascript first developed for firefox but later on it is accepted by mostly every browser!

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
     "<h1 id=​"text" style=​"color:​ purple;​">​Hello​</h1>" <br>
document.querySelector("text"); <br>
null <br>
document.querySelector("#text"); <br>

<p> <h1 id=​"text" style=​"color:​ purple;​">​Hello​</p>​<br>
document.querySelector("list"); <br>

null <br>
document.querySelector(".list"); <br>


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
