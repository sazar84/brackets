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

  let del;
  let delnext;

  for (var i = 0; i < keys.length; i++) {
    arrBrackets.forEach((item, j) => {

      if (arrBrackets.includes(keys[i])) {
        del = arrBrackets.indexOf(keys[i]);
      }
      if (arrBrackets.includes(newObjOfBrackets[keys[i]])) {
        delnext = arrBrackets.indexOf(newObjOfBrackets[keys[i]]);
      }
      if (del < delnext) {
        delete arrBrackets[del];
        delete arrBrackets[delnext];
      }
      if (del == delnext) {
        delete arrBrackets[del];
        delete arrBrackets[delnext + 1];
      }
    });
  }

  let result;
  for (var b = 0; b < arrBrackets.length; b++) {
    if (typeof arrBrackets[b] == "undefined") {
      result = true
    } else {
      result = false
    }
  }

  return result;

}