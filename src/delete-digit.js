const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Array.from(String(n));

  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    const newArr = [...arr] 
    
    newArr.splice(i, 1, '')

    const a = Number(newArr.join(""));

    if (a > max) {
      max = a;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
