
let array0 = ['shajal','baten']
console.log("Item of array0[0]: "+array0[0]);
console.log("Length Of array0: "+array0.length);

for(let i=0; i<array0.length;i++){
    console.log(array0[i]);
}
console.log("----------------------");

let first = array0[0];
let last = array0[array0.length-1];
console.log("First: "+first+" Last: "+last);

console.log("----------------------");

array0.forEach(function(item,index,array){
    console.log("Item: "+item+" Index: "+index+" Array: "+array[index]);
})
array0.push("Nahian");
array0.push("Aysha");
console.log(array0);

array0.pop();
console.log(array0);
array0.shift();
console.log(array0);
array0.unshift('Tarik');
console.log(array0);
let index = array0.indexOf('Nahian');
console.log(index);
let pos = array0.indexOf('baten');
let removedItem = array0.splice(pos,1);
console.log(removedItem);
let array1 = array0.slice();
console.log("Array 0 : ["+array0+"] Array 1 : ["+array1+"]");
console.log("----------------------");
const car = [];
car.push('Toyota','BMW','Audi');
console.log(car);
car[3] = "Mahindra"
console.log("Array Position : car[3]: "+car[3]);
console.log(Object.keys(car));

console.log("2nd commit");

let x = 20;
let arr1 = [10,20,30,40];
let obj1 = {
    name: "baten",
    salary:"32000"
}
console.log(typeof x);
console.log(typeof(arr1));
console.log(typeof(obj1));

console.log(Array.isArray(arr1));
console.log(Array.isArray(obj1));
console.log(arr1 instanceof Array);
console.log(arr1.toString());
console.log(arr1.join("*"));
console.log(array0[array0.length]="baten");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

console.log(fruits.slice(2));
console.log(fruits.slice(0,3));

//Soting------>>>
let arr2 = ["Shajal","Arif","Baten","Nahian","Aysha","Lahm"];
let arr3 = [20,1,3,27,5,4,7];
let rev = arr2.reverse();
console.log(rev);
let ascn = arr2.sort(function(a,b){
    return a-b;
});
console.log("Array Ascending : "+ascn);
let desc = arr3.sort(function(a,b){
    return b-a;
});
console.log("Array Descending : "+desc);


