var time = require('time');
var now = new time.Date;

// `.getDate()`, `.getDay()`, `.getHours()`, etc. 
// will return values according to UTC-8 
 
console.log(now.getHours());
console.log(now.getMinutes());