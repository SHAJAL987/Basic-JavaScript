class calculation{
    
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }

    add = (num1,num2)=>{
        return num1+num2;
    }
    divi = (num1,num2)=>{
        return num1-num2;
    }
    myObj={
        type: "Calculation",
        method1:this.add,
        method2:this.divi,
        myArray:[
            this.method1,
            this.method2
        ]
    }

}
let obj = new calculation();
console.log(obj.add(10,20));
console.log(`Addition : ${obj.myObj.method1(20,10)}`);
console.log(`Divition : ${obj.myObj.method2(20,10)}`);