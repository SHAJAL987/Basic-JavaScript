let myDate = new Date();
console.log(myDate);
//year month hours mini

let myDate1 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(myDate1);

let myDateFormat = new Date();
console.log(myDateFormat.getFullYear());
console.log(myDateFormat.getMonth()+1);
console.log(myDateFormat.getDay());
console.log(myDateFormat.getDate());

let date  = new Date()
let year  = date.getFullYear();
let month = date.getMonth()+1;
let day   = date.getDate();
let hours = date.getHours();
let minu  = date.getMinutes();
let sec   = date.getSeconds();

let myFormat = `${year}/${month}/${day} ${hours}:${minu}:${sec}`;
console.log(myFormat);

