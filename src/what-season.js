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
  if (!date)
    return 'Unable to determine the time of year!'

      
  if (!(date instanceof Date))
  throw new Error('Invalid date!')

  try {
    date.getTime();
  } catch (error) {
    throw new Error('Invalid date!');
  }

 let temp = date.getMonth() 
 if (temp < 2 && temp >= 0)
  return 'winter'
  else if (temp < 5)
  return 'spring'
  else if (temp < 8)
  return 'summer'
  else if (temp < 11)
  return 'autumn'
  else if (temp === 11)
  return 'winter'


  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
