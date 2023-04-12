const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  let { addition } = options;
  addition = addition === undefined ? undefined : addition + "";
  let result = "";

  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  for (let i = 0; i < repeatTimes; i += 1) {
    if (i !== 0) {
      result += separator;
    }

    result += str;

    const addSepArr = [];

    for (let j = 0; j < additionRepeatTimes; j += 1) {
      addSepArr.push(addition);
    }

    result = `${result}${addSepArr.join(additionSeparator)}`;
  }

  return result;
}

module.exports = {
  repeater
};
