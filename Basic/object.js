// let obj = {
//     firstName: "Ashiqul Islam",
//     lastName: "Shajal",
//     email:"ashiqulislamshajal.cse@gmail.com",
//     address:{
//         present:"54,Sukrabad,Dhanmondi,Dhaka",
//         permanent:"3500,Sadar South, Cumilla"
//     },
//     fullName:function(){
//         return this.firstName+" "+this.lastName;
//     },
//     result:[
//         {
//             subject:"math",
//             marks:"99"
//         },
//         {
//             subject:"english",
//             marks:"100"
//         }

//     ]
    
// }

// let name = obj.firstName+" "+obj.lastName;
// console.log("Full Name : "+name);
// console.log("Email : "+obj.email);
// console.log("Present : "+obj.address.present);
// console.log("Permanent : "+obj.address.permanent);
// console.log("Full Name : "+obj.fullName());
// console.log("--------------------------------------");

// let count = obj.result.length;
// console.log(count);

// for(let i=0; i<count; i++){
//     console.log(obj.result[i].marks);
// }
// obj.result.forEach(function(item,index,array){
//     console.log(array[index].subject+":"+array[index].marks);
// })

// obj.result.map((val,index) =>{
//     // console.log(val.subject);
//     // console.log(val.marks);
//     if(index === 0 ){
//        console.log(val.subject);
//     console.log(val.marks);
//     }
//     return "No data found"
// })
// console.log("--------------------->")
// let myObject = {
//     fname:"Ashiqul Islam",
//     lname:"Shajal",
//     age:25
// }
// console.log(typeof(myObject));
// for(let x in myObject){
//     if(x=='fname'){
//         console.log(`First Name: ${myObject[x]}`);
//     }else if(x=='lname'){
//         console.log(`Last Name: ${myObject[x]}`);
//     }else {
//         console.log(`Age: ${myObject[x]}`);
//     }
// }

let person = {};
person.id       = "000332",
person.fname    = "Md.Ashiqul islam";
person.lastName = "Shajal";
person.age      = 25;
person.blood    = "A+";
person.phone    = ["01303021359","01730295758","01711669001"];
person.address  =[
    {
        addressType:"PRS",
        addPref    : "Y",
        addLine1   : "54, Sukrabad, Dhaka",
        addLine2   : "Dhanmondi"
    },
    {
        addressType:"PER",
        addPref    :"N",
        addLine1   :"Sadar South, Cumilla",
        addLine2   :"Cumilla, Bangladesh"
    }
]

let x = person;
delete x.age;
console.log(x);
// let AddressCount = x.address.length;
// console.log(AddressCount);
// console.log("------------------------------");

// for(store in x ){
//     console.log(x[store]);
//     if(store === 'address'){

//     }
// }
let test = JSON.stringify(person)
// console.log(test);
let testjson = JSON.parse(test)
let fname = testjson.address[1].addLine1

testjson.address.forEach((item,index,array)=>{
    for (k in item){
        console.log(item[k]);
    }
})






