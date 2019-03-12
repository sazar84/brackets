let newObjOfBrackets = {};
let arrBrackets = [];
let Stack = [];

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

function bracketCompare(newObjOfBrackets, Stack, bracket) {
  if (newObjOfBrackets[bracket] === bracket) {
    if (Stack.includes(bracket)) {
      if (Stack.pop() !== bracket) {
        return false;
      }
    } else {
      Stack.push(bracket);
    }
  } else if (bracket in newObjOfBrackets) {
    Stack.push(bracket);
  } else if (Stack.length === 0 ||
    newObjOfBrackets[Stack.pop()] !== bracket) {
    return false;
  }
  return true;
}

module.exports = function check(str, bracketsConfig) {
  // your solution
  let arrBrackets = toSplit(str);
  let newObjOfBrackets = toObject(bracketsConfig);
  
  return Stack.length === 0;

}