// const bracketsConfig  =  [['(', ')']];
// const str = "((()))()";
// let Stack = [];
var newObjOfBrackets = {};
var arrBrackets = [];

function toObject(bracketsConfig) {
  let obj = {};
  bracketsConfig.forEach(element => obj[element[0]] = element[1]);
  return obj;
}

function toSplit(str) {
  let arr = [];
  arr = str.split('');
  return arr;
}

module.exports = function check(str, bracketsConfig) {
  // your solution
  arrBrackets = toSplit(str);
  newObjOfBrackets = toObject(bracketsConfig);
  keys = Object.keys(newObjOfBrackets);

  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < arrBrackets.length; j++) {
      if (arrBrackets.includes(keys[i])){
        arrBrackets.splice(arrBrackets[j], 1) 
      } else continue
      if (arrBrackets.includes(newObjOfBrackets[keys[i]])) {
        arrBrackets.splice(arrBrackets[j], 1)
      } else continue
    }
}

let result;
if (arrBrackets.length == 0) {
  result = true
} else {
  result = false
}

return result;

}