/* We have a trust issues with setTimeout(), because if we assign 5 sec of timer
   to a callback function then it is not manadtory that it will take exactly 5 sec,
   it may exceeds the time limit.
   
   
   Reason: As we know when a call back function used Web API, it is taken outside of callstack and stored in a 
   callback queue, when the whole execution of Global Execution Context is done then that callback function gets inside 
   the callstack. */

console.log("Start");

setTimeout(function a() {
  console.log("Callback");
}, 5000);

console.log("End");

// We delayed this function 10 sec more that means our setimeout will take 15 secs

let startDate = new Date().getTime(); //current time in ms
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While Expires!");
