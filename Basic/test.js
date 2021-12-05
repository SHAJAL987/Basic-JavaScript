
let myArray = ['hello','world','12334'];
let bufferArray = [];

const textToBinary = (str = '') => {
    let res = '';
    res = str.split('').map(char => {
       return char.charCodeAt(0).toString(2);
    }).join(' ');
    return res;
 };

 for(let i=0; i<myArray.length; i++){
    bufferArray += textToBinary(myArray[i]);
 }

console.log(bufferArray);

function binaryAgent(str) {

    var binString = '';
    
    str.split(' ').map(function(bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
      });
    return binString;
}
console.log(textToBinary('hello'));
console.log( binaryAgent('1101000110010111011001101100110111111101111101111111001011011001100100110001110010110011110011110100'));




