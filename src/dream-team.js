const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(members instanceof Array))
    return false
  let result = []
  for (let item of members)
    if (typeof item === 'string')
      for (let i = 0; i < item.length; i++)
        if (item[i] !== " ") {
          result.push(item[i].toUpperCase())
          break
        }
  return result.sort().filter((x) => x >= "A" && x <= 'Z').join('')
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
