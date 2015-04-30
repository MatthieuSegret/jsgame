'use strict';

// Player hérite de StaticOject
var Player = function(game, x, y, image_name) {
  this.image_name = image_name || 'player';
  StaticOject.call(this, game, x, y, this.image_name);
}

Player.prototype = Object.create(StaticOject.prototype);
Player.prototype.constructor = StaticOject;

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
