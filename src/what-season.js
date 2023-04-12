const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || !date.getDate || !date.getUTCDay) {
    throw new Error("Invalid date!");
  }

  try {
    date.getDate();
  } catch (err) {
    throw new Error("Invalid date!");
  }

  try {
    date.getUTCDay();
  } catch (err) {
    throw new Error("Invalid date!");
  }

  if (isNaN(date.getDate())) {
    throw new Error("Invalid date!");
  }

  const monthBySeason = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];

  return monthBySeason[date.getMonth()];
}

module.exports = {
  getSeason
};
