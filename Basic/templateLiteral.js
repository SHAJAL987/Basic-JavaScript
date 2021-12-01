let str = `Hi may name is ashiqul islam shajal`;
let num1 = 10;
let num2 = 20;
let myArray = [10,20,30,40];

console.log(`Sum of two numbers is : ${num1+num2}`);
console.log(`Array Length of myArray : ${myArray.length}`);
console.log(`Added an Element on Array : ${myArray.push(50)}`);
console.log(`Modified Array : ${myArray}`);

let myMultiLineString = `Hello my girl
what's up
what are you doing
on this time`;
console.log("--------------------->>>>>");
console.log(myMultiLineString);


let firstName = `Ashiqul Islam`;
let lastName = ` Shajal`;
console.log(`Full name is : ${firstName.concat(lastName)}`);

let floatValue = 2.300000
console.log(floatValue.toFixed(2));

console.log("------------ Vat calculation ------------->>>>>");
let price = 10;
let VAT = 0.25;
let total = `Total : ${(price*(1+VAT)).toFixed(3)} tk`;
console.log(total);

console.log("----------- Array Travarse --------->>>>>");
let arr = ["shajal","Arif","Baten","Nahian"];
arr.map((val,index)=>{
    console.log(`index[${index}] value(${val})`);
})

let x = 123e5;
let y = 123e-5;
console.log(typeof x);
console.log(typeof y);
console.log(x);
console.log(y);

