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
  let max = 0, sizeN = (''+n).length
  for (let i = 0; i < sizeN; i++) {
    let temp = Math.trunc(n/(10**(i+1)))*(10**i)+n%(10**i)
    if (temp > max)
      max = temp
  }

  return max

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
