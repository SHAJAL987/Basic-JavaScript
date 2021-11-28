
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
