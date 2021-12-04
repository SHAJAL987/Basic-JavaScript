let myArray = [30,0,20,10,5,2,3,1];

// Iteration Using Loop
let length = myArray.length;
for(let i=0; i<length; i++){
    console.log(myArray[i]);
}

//forEach loop
myArray.forEach((value,index,array)=>{
    console.log(`index[${index}]:${value} array:${array}`);
});

//map
myArray.map((val,index,array)=>{
    console.log(val);
})

let mapArray = myArray.map((val,index,array)=>{
    return val > 18;
})
console.log(mapArray);

//filer
let myFilterArray = myArray.filter((val,index,array)=>{
    return val> 18;
})
console.log("Filer : "+myFilterArray);

//reduce
let myReduceArray = myArray.reduce((total,val,index,array)=>{
    return total+val;
})
console.log(myReduceArray);

//includes
console.log(myArray.includes(0));

//find
let myFindArray = myArray.find((value,index,array)=>{
    return value > 18;
})
console.log(myFindArray);

//findIndex
let myArrayIndex = myArray.findIndex((val,index,arr)=>{
    return val > 18;
})
console.log(myArrayIndex);


