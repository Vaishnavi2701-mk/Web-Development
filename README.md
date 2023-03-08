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
</ul>
}
