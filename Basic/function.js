// map() function
let arr = [14,10,11,00];
let newArr = arr.map(Math.sqrt);
console.log(newArr);

// filter() function
const array0 = [32,33,16,40];
const result = array0.filter(checkAdult);

function checkAdult(array0){
    return array0>=18;
}
console.log(result);



