var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canfly = false;
  this.color = 'grey';
  
  
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
}
RetiredForagerBee.prototype.gamble = function () {
  var treasure = null;
  this.treasureChest.push(treasure);
};