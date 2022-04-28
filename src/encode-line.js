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
function encodeLine( str ) {
 let count = 1, tempStr = ''
 for (let i = 0; i < str.length; i++){
   if (str[i]===str[i+1])
   count++
   else if (count === 1 && str[i+1] !== str[i])
   tempStr+= str[i]
   else{
   tempStr+=''+count+str[i]
   count=1
 }}
return tempStr
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
