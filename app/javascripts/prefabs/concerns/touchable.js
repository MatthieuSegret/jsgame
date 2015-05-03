'use strict';

// Donne la capacité à un objet de toucher un autre
var Touchable = function() {}

Touchable.prototype.touch = function(target) {
  return Math.hypot(target.x - this.x, target.y - this.y) <= 30;
};

module.exports = Touchable;
