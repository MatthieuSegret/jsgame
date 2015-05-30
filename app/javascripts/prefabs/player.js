'use strict';

var Touchable = require('./concerns/touchable');
var Movable = require('./concerns/movable');
var StaticObject = require('./staticObject');

// Player hérite de StaticObject
var Player = function(game, x, y, image_name) {
  this.image_name = image_name || 'player';
  this.speed = 3;
  StaticObject.call(this, game, x, y, this.image_name);
}
Player.prototype = Object.create(StaticObject.prototype);
Player.prototype.constructor = StaticObject;

// Mixins
_.extend(Player.prototype, Movable.prototype);
_.extend(Player.prototype, Touchable.prototype);

module.exports = Player;
