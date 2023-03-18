/* Whenever we get callback function it uses particular Web API and taken out of callstack.
   It is stored in Global space as same as Web API.
   After using particular Web API it is push back inside callback queue.
   Then event loop maintain the callstack and callback queue and if callstack is empty then it will take function from 
   callback queue and put inside callstack.
   The Web API's which uses "promises" and "mutation observer" are stored inside a microtask queue which have the highest priority.
*/

console.log("Start");
setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://www.netflix.com/in/").then(function cbF() {
  console.log("CB Fetch");
});

console.log("End");

/* Output:
Start
End
CB Fetch //Microtask queue
CB SetTimeout //Callback queue
*/
