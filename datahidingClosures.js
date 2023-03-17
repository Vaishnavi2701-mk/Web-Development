function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

// In this way we can use closure for data hiding

var counter1 = counter();
console.log(counter1());
console.log(counter1());

// It will be totally new, so start with 1
var counter2 = counter();
console.log(counter2());
console.log(counter2());
console.log(counter2());

// Disadvantage of closure

/*
 1) Overconsumption of memory
 2) Closed over variable -> not garbage collector -> over memory consumption -> memory leak

 => Garbage Collector

 - In programming language like c, c++, memory allocation & deallocation is handeled by developer 
 - In JS(high level language) memory deallocation is handeled by JS engine 
 - Unused variable are taken out of memory and stored in garbage collector to freez the memory

*/
