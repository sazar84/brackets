
// const bracketsConfig  =  [['(', ')']];
// const str = "((()))()";

function toObject(bracketsConfig) {
  let obj = {};
  bracketsConfig.forEach(element => obj[element[0]] = element[1]);
  return obj;
}

var arr = [];
arr = str.split('');



module.exports = function check(str, bracketsConfig) {
  // your solution
  toObject(bracketsConfig);
  if (obj.includes(arr)) {
    return false
  }
}
