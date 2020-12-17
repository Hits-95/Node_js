var events = require("events");
var eventEmitter = new events.EventEmitter();

//creat a event handler...
var myEventHandler = function () {
  console.log("event called...");
};

//assign event to eventHandler...
eventEmitter.on("hits", myEventHandler);

//Fire hits event:
eventEmitter.emit("hits");
