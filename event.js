var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
  console.log('hello hi');
}
function sample(){
eventEmitter.on('hi', myEventHandler);

eventEmitter.emit('hi');
}
module.exports.sample = sample