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


  let rt = (typeof options.repeatTimes === 'number')?options.repeatTimes:1
  let sep = options.separator ? options.separator : '+'
  let add = options.addition?options.addition:'' 
  if(options.addition === false)
    add = 'false'
    else if(options.addition === null)
    add = 'null'
  let finalAdd = add
  let addRT = (typeof options.additionRepeatTimes === 'number')?options.additionRepeatTimes:1 
  let addSep = options.additionSeparator? options.additionSeparator:'|'

  let result = ''

  for (let i = 1; i <addRT;i++){
    finalAdd+=addSep+add
  }

  for (let i = 0; i<rt;){
    result += str
    result += finalAdd
    i++
    if (i===rt)
      break
    result += sep
  }
/*
  if (!options.repeatTimes){
    result = str
    if (options.addition)
      result += (options.addition).repeat(options.additionRepeatTimes ? options.additionRepeatTimes : 1)
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    //if(options.addition === "PLUS"){

    result += str
    //if (options.addition)
      for(let k = 0; k < (options.additionRepeatTimes ? options.additionRepeatTimes : 1); k++)
      result += options.addition?options.addition:'' 
    if (i < options.repeatTimes - 1)
      result +=  options.separator ? options.separator : '+'
    //}
  }*/
  return result
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
