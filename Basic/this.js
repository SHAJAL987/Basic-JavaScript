let x = this;
console.log(x);

const Person = {
    fname:"Ashiul Islam",
    lname:"Shajal",
    id:987,
    fullObj:function(){
        return this;
    },
    fullName:function(){
        return `${this.fname} ${this.lname}`
    }

}
console.log(Person.fullObj());
console.log(Person.fullName());


const Person1 = {
    fullName:function(){
        return `${this.fname} ${this.lname}`
    }
}
const Person2 = {
    fname:"Ashiq",
    lname:"Shajal"
}
console.log(Person1.fullName.call(Person2));