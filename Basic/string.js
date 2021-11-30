let ans1 = "hello every one";
let ans2 = "It's Ok";

console.log(ans1);
console.log(ans2);

let ans3 = 'It"s Ok bhai';
console.log(ans3);
let ans4 = 'Hi it"s "Jhon Doe"';
console.log(ans4);

let text = "abcskjfhdvyuvyvby";
let count = text.length;
console.log(count);

let myArray = [];
myArray.push(...text);
console.log(myArray);

//slice()
let myString  = "Apple, Banana, Malta";
let myStringSlice = myString.slice(7,13);
console.log(myStringSlice);
let mySliceNew = myString.slice(-13,-7);
console.log(mySliceNew);
console.log(myString.slice(7));
console.log(myString.slice(-13));

//substring()
console.log(myString.substring(7,13)); //can not accept minus value.

//substr()
console.log(myString.substr(7,6));
console.log(myString.substr(7));
console.log(myString.substr(-5));

//replace()
let myGf = "I love Sokina";
console.log(myGf);
console.log(myGf.replace("Sokina","Zarina"));
let myGf1 = "I love Sokina & Sokina";
console.log(myGf1.replace("Sokina","Zarina"));

//toUpperCase()
console.log(myGf.toUpperCase());

//toLowerCase()
console.log(myGf.toLowerCase());

//trim()
let myTrim = "   hello Abul Bhai  ";
console.log(myTrim.trim());

//charAt()
let char = "HELLO EVERY ONE";
console.log(char.charAt(10));

//charCodeAt()
console.log(char.charCodeAt(0));






