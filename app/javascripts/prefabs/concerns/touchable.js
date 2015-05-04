'use strict';

// Donne la capacité à un objet de toucher un autre
var Touchable = function() {}

Touchable.prototype.touch = function(target) {
  return this.game.physics.arcade.overlap(this, target);
};

module.exports = Touchable;
