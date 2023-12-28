var EventEmitter = require("events");

var event = new EventEmitter();

event.on("myevent", () => {
  console.log("myevent got triggered");
});

event.on("myanotherevent", () => {
  console.log("myanother event got triggered");
});

var isMyevent = false;

if (isMyevent) {
  event.emit("myevent");
} else {
  event.emit("myanotherevent");
}
