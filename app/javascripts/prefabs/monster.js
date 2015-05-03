'use strict';

var StaticObject = require('./staticObject');

// Player hérite de StaticObject
var Monster = function(game, x, y, image_name) {
  this.image_name = image_name || 'ghost1';
  StaticObject.call(this, game, x, y, this.image_name);
}

Monster.prototype = Object.create(StaticObject.prototype);
Monster.prototype.constructor = StaticObject;

Monster.prototype.follow = function(target) {
  var dirX = this.x < target.x ? -1 : 1;
  this.x -= dirX * 1;

  var dirY = this.y < target.y ? -1 : 1;
  this.y -= dirY * 1;
};

Monster.prototype.touch = function(target) {
  return Math.hypot(target.x - this.x, target.y - this.y) <= 30;
};

module.exports = Monster;
