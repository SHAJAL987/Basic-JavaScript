let array1 = [];
let array2 = [
    {
        team:"ABS",
        memberName:"Arif",
        tech:"Oracle"
    },
    {
        team:"EKYC",
        memberName: "mehdi",
        tech:"React Js"
    },
    {
        team:"RDCD",
        memberName:"Tarif",
        tech:"Node Js"
    },
    {
        team:"PSB",
        memberName:"Kobita",
        tech:"APEX"
    }
];

console.log(array2.length);

for(let i=0; i<array2.length; i++){
    array1.push(array2[i].memberName);
}
console.log(array1);
let indexOfMehedi = array1.indexOf('mehdi');
array1[indexOfMehedi] = "mehedi";
array1.splice(2,0,"Maruf vai")
console.log(array1);







