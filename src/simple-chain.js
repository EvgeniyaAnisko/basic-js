const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length;
  },

  addLink(link) {
    this.chains.push(link);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || !(position > 0 && position < this.getLength())) {
      this.chains.length = 0;
      throw new Error("You can\'t remove incorrect link!");
    }
    this.chains.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },

  finishChain() {
    const strChain = this.chains.map((chain) => `( ${chain} )`).join("~~");
    this.chains.length = 0;
    return strChain;
  }
};
module.exports = {
  chainMaker
};
