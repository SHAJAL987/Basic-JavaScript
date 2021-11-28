//Spread Operator in Function Call
let number = []
console.log("Before Push (length): "+number.length);
number.push(10,20,30,40,50);
console.log("After Push (length): "+number.length);
console.log("Final Array: "+number);
console.log("-----------");
console.log(...number);

function add(a,b,c,d,e){
    return a+b+c+d+e;
}
console.log("Call add(): "+add(...number));
console.log("Max Value Of Array : "+Math.max(...number));
let minValue = Math.min(...number);
console.log("Min Value Of Array : "+minValue);
console.log("------------------------------");

//Array Literals
let name = ["Shajal","Mehdi","Tarif"];
let team = ["Abs","e-KYC","Rdcd"];
console.log("Memebar Array: "+name);
console.log("Team Array: "+team);
let group = [...name,...team];
console.log("Combined: "+group);
let newGroup = [...group,"Aysha","Nahian","Baten","Lham"];
console.log("newGroup Array: "+newGroup);
let word = "Hello Shajal.";
let letterFindingArray = [...word];
console.log("Letters From Word: "+letterFindingArray);

letterFindingArray.forEach(function(item,index,array){
    console.log("Index["+index+"] "+" Item:"+array[index]);
})

//Object Literals
let product = {
    name: "Laptop",
    price: 30000
};
let place = {
    shopeName: "Ryans Computers",
    address: "IDB Bhaban"
};
let store = {...product, ...place};

console.log(product);
console.log(place);
console.log(store);








