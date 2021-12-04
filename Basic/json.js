let myJson = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj = JSON.parse(myJson);
console.log(obj);
let arrayCount = obj.employees.length;

obj.employees.map((val,index,array)=>{
    console.log(`${array[index].firstName} ${array[index].lastName}`);
})

