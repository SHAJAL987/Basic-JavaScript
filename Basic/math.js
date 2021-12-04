let a = Math.PI;
let b = Math.E;
let c = Math.SQRT2;
let d = Math.SQRT1_2;
let e = Math.LN2;
console.log("PI:"+a);
console.log("E:"+b);
console.log("SQRT2:"+c);
console.log("SQRT1_2:"+d);
console.log("LN:"+e);
console.log("----------------");

console.log("Round:"+Math.round(a));
console.log("Round 1: "+Math.round(d));
console.log(`ceil: ${Math.ceil(e)}`);
console.log(`Floor: ${Math.floor(b)}`);
console.log(`Trunc: ${Math.trunc(c)}`);

console.log(`round1: ${Math.round(4.5)}`);
console.log(`round2: ${Math.round(4.4)}`);

console.log(`(+ve) Sign: `+Math.sign(-4));
console.log(`(-ve) Sign: `+Math.sign(4));
console.log(`0 Sign: ${Math.sign(0)}`);

console.log(`POW: ${Math.pow(8,2)}`);
console.log(`SQRT: ${Math.sqrt(64)}`);

console.log(`Random Number: ${Math.random()}`);
console.log(`Random num (0-9): ${Math.floor(Math.random()*10)}`);
console.log(`Random num(0-10): ${Math.floor(Math.random()*11)}`);
console.log(`Random num (0-99): ${Math.floor(Math.random()*100)}`);
console.log(`Random num(0-100): ${Math.floor(Math.random()*101)}`);

console.log(`Random num(1-10): ${Math.floor(Math.random()*10)+1}`);
console.log(`Random num(1-100): ${Math.floor(Math.random()*100)+1}`);

//random number between min (included) and max (excluded)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  //random number between min and max (both included)
  function getRndInteger1(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  console.log(getRndInteger(10,100));
  console.log(getRndInteger1(1,10));


