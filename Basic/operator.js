let x = 10;
let y = 20.25;
let z = "hello";
const aa = [1,2,3];
let ab = {};
console.log(x+"-->Type : "+typeof(x));
console.log(y+"--->Type : "+typeof(y));
console.log(z+"-->Type : "+typeof(z));
console.log("aa"+"-->Type : "+typeof (aa));
console.log("ab"+"-->Type : "+typeof (ab));

let a1 = "10";
let b1 = "20.23";
let c1 = "hello"+a1+b1;
console.log(a1+"-->Type : "+typeof(a1));
console.log(b1+"--->Type : "+typeof(b1));
console.log(c1+"-->Type : "+typeof(c1));

console.log("Sum of a1 and b1 : "+parseInt(a1)+parseFloat(b1));
console.log("Sum of a1 and b1 : "+parseInt(a1)+parseInt(b1));

let a2 = parseInt(a1);
let b2 = parseFloat(b1);
console.log(a2);
console.log(b2);
console.log(a2+b2);

console.log("Sum of a1 and b1 : "+(parseInt(a1)+parseFloat(b1)));
console.log("Sum of a1 and b1 : "+(parseInt(a1)+parseInt(b1)));

let a3 = "My Name is - ";
a3 +=" Shajal";
console.log(a3);


let a4 = 10+20+" Hello js";
let b4 = "Hello js "+10+20;
console.log(a4);
console.log(b4);





