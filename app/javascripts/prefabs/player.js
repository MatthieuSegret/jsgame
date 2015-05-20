'use strict';

var Touchable = require('./concerns/touchable');
var StaticObject = require('./staticObject');

// Player hérite de StaticObject
var Player = function(game, x, y, image_name) {
  this.image_name = image_name || 'player';
  StaticObject.call(this, game, x, y, this.image_name);
}
Player.prototype = Object.create(StaticObject.prototype);
Player.prototype.constructor = StaticObject;

// Méthodes d'instance
var instanceMethods = {

  moveUp: function() {
    this.y -= 3;
  },
  moveDown: function() {
    this.y += 3;
  },
  moveLeft: function() {
    this.x -= 3;
  },
  moveRight: function() {
    this.x += 3;
  }
};

// Mixins
_.extend(Player.prototype, Touchable.prototype);
_.extend(Player.prototype, instanceMethods);

module.exports = Player;
