const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "") return str;

  const reg = /(?=(.))\1{1,}/g;
  let arr = str.match(reg);
  return arr
    .map((el) => {
      if (el.length === 1) {
        return el;
      } else {
        return el.length + el[0];
      }
    })
    .join("");
}

module.exports = {
  encodeLine
};
