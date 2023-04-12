const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  return arr
    .map((el, i) => {
      if (el === `--discard-next` || arr[i - 1] === `--discard-next`) {
        return;
      } else if (el === `--discard-prev` || arr[i + 1] === `--discard-prev`) {
        return;
      } else if (el === `--double-next`) {
        return arr[i + 1];
      } else if (el === `--double-prev` && arr[i - 2] === `--discard-next`) {
        return;
      } else if (el === `--double-prev`) {
        return arr[i - 1];
      } else {
        return el;
      }
    })
    .filter((el) => el);
}

module.exports = {
  transform
};
