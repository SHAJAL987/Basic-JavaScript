let myMap = new Map();

myMap.set("Apple",5000);
myMap.set("Orange",6000);
myMap.set("Lici",7000);
myMap.set("Malta",2000);

console.log(typeof myMap);
console.log(myMap);
console.log(myMap.get("Apple"));
console.log(`Map size: ${myMap.size}`);
myMap.delete("Malta");
console.log(myMap);
console.log(myMap.has("Malta"));

//iteration
myMap.forEach((val,key)=>{
    console.log(`key(${key})=> ${val}`);
})