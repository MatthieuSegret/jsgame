'use strict';

var StaticObject = require('./staticObject');

// Player hérite de StaticObject
var Player = function(game, x, y, image_name) {
  this.image_name = image_name || 'player';
  StaticObject.call(this, game, x, y, this.image_name);
}

Player.prototype = Object.create(StaticObject.prototype);
Player.prototype.constructor = StaticObject;

Player.prototype.moveUp = function() {
  this.y -= 3;
};

Player.prototype.moveDown = function() {
  this.y += 3;
};

Player.prototype.moveLeft = function() {
  this.x -= 3;
};

Player.prototype.moveRight = function() {
  this.x += 3;
};

module.exports = Player;
