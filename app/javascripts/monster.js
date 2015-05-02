'use strict';

var StaticObject = require('./static_object');

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

module.exports = Monster;
