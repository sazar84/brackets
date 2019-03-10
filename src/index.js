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
  let count = 0;

  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < arrBrackets.length; j++) {
      if (keys[i] == arrBrackets[j]) {
        count += 1;
      } else {
        count -= 1;
      }
    }
  }

  if (count == 0) {
    return true;
  } else { return false}

}