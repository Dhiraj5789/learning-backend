// What the 'heck' is an event loop?
// What is JavaScript?
// I'm a single threaded single concurrent language  ‑‑ right.
// yeah, cool, I have a call stack, an event loop, a callback queue, and some other APIs and stuff.
// Hmmmmm........

// V8 - The heap, where memory allocation happens, and then there's the call stack, which is where your stack
// frames are and all that kind of stuff, but, if you, like, clone the V8 code base and grep for things like
// setTimeout or DOM or HTTP request, they're not in there, they don't exist in V8

// // Example 1
// console.log("Hello World"); // 1st

// setTimeout(function () {
//   //function is sent into task queue after timer is complete
//   //and is added back by event loop to call stack when stack is empty
//   console.log("there"); // 3rd
// }, 5000);

// console.log("Naruto!"); // 2nd

// Example 2

// console.log("Hello World"); // 1st

// setTimeout(function () {
//   //is sent into task queue and is added back by event loop to call stack when stack is empty
//   console.log("there"); // 3rd
// }, 0);

// console.log("Naruto!"); // 2nd

// Example 3, Hmmm...
// let count = 0;
// // Basically, setTimeout being asynchronous(web apis) run as multiple threads and are
// // added to the task queue when each gets finished and is executed one by one by the event loop
// setTimeout(() => {
//   console.log("Hi", ++count);
// }, 5000);

// setTimeout(() => {
//   console.log("Hisadfa", ++count);
// }, 5000);

// setTimeout(() => {
//   console.log("Hi", ++count);
// }, 5000);

// setTimeout(() => {
//   console.log("Hi", ++count);
// }, 5000);

// Example 4
// Experiment: How fast is JavaScript, actually...

let count = 0;
setTimeout(() => {
  console.log("Hi1", ++count);
}, 5000);

setTimeout(() => {
  console.log("Hi2", ++count);
}, 4999.999999999999);

setTimeout(() => {
  console.log("Hi3", ++count);
}, 5000);

setTimeout(() => {
  console.log("Hi4", ++count);
}, 5000);
