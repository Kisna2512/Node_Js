const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("Waterfall", () => {
  console.log("Please turn off the motor!");
  setTimeout(() => {
    console.log("Please turn off the motor! It's gentle remainder ");
  }, 3000);
});
console.log("Script is running");
myEmitter.emit("Waterfall");
