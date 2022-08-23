
var myDate = new Date();
console.log(myDate.getTimezoneOffset());
console.log(Date(myDate + myDate.getTimezoneOffset() * 60000));
