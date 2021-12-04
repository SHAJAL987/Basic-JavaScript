let obj = {
    firstName: "Ashiqul Islam",
    lastName: "Shajal",
    email:"ashiqulislamshajal.cse@gmail.com",
    address:{
        present:"54,Sukrabad,Dhanmondi,Dhaka",
        permanent:"3500,Sadar South, Cumilla"
    },
    fullName:function(){
        return this.firstName+" "+this.lastName;
    },
    result:[
        {
            subject:"math",
            marks:"99"
        },
        {
            subject:"english",
            marks:"100"
        }

    ]
    
}

let name = obj.firstName+" "+obj.lastName;
console.log("Full Name : "+name);
console.log("Email : "+obj.email);
console.log("Present : "+obj.address.present);
console.log("Permanent : "+obj.address.permanent);
console.log("Full Name : "+obj.fullName());
console.log("--------------------------------------");

let count = obj.result.length;
console.log(count);

for(let i=0; i<count; i++){
    console.log(obj.result[i].marks);
}
obj.result.forEach(function(item,index,array){
    console.log(array[index].subject+":"+array[index].marks);
})

obj.result.map((val,index) =>{
    // console.log(val.subject);
    // console.log(val.marks);
    if(index === 0 ){
       console.log(val.subject);
    console.log(val.marks);
    }
    return "No data found"
})
console.log("--------------------->")
let myObject = {
    fname:"Ashiqul Islam",
    lname:"Shajal",
    age:25
}
console.log(typeof(myObject));
for(let x in myObject){
    if(x=='fname'){
        console.log(`First Name: ${myObject[x]}`);
    }else if(x=='lname'){
        console.log(`Last Name: ${myObject[x]}`);
    }else {
        console.log(`Age: ${myObject[x]}`);
    }
}




