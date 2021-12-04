let day;
let time;
console.log(new Date().getDay()+1);
switch(new Date().getDay()+1){
    case 0:
        day = "Saturday";
        break;
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "wednesday";
        break;
    case 5:
        day = "Thrusday";
        break;
    case 6:
        day = "Friday";
        break;
    default:
        day = "None of day present."
        break;
}
console.log(`Today is : ${day} ${ new Date()}`);