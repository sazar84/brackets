
const bracketsConfig  =  [['(', ')']];
const str = "((()))()";
let Stack = [];
var newObj = {};
var newSTR = [];

function toObject(bracketsConfig) {
  let obj = {};
  bracketsConfig.forEach(element => obj[element[0]] = element[1]);
  return obj;
}

function toSplit(str){
  let arr = [];
  arr = str.split('');
  return arr;
}

newObj = toObject(bracketsConfig);
console.log(newObj)

newSTR = toSplit(str)
console.log(newSTR);



module.exports = function check(str, bracketsConfig) {
  // your solution
  toObject(bracketsConfig);


}
