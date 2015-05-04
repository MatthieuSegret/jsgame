'use strict';

var Touchable = require('./concerns/touchable');
var StaticObject = require('./staticObject');

// Player hérite de StaticObject
var Monster = function(game, x, y, image_name) {
  this.image_name = _.sample(['ghost1', 'ghost2', 'ghost3', 'dark_knight', 'hornet', 'undead', 'cactuar']);
  StaticObject.call(this, game, x, y, this.image_name);
}
Monster.prototype = Object.create(StaticObject.prototype);
Monster.prototype.constructor = StaticObject;

// Mixins
_.extend(Monster.prototype, Touchable.prototype);

Monster.prototype.follow = function(target) {
  var dirX = this.x < target.x ? -1 : 1;
  this.x -= dirX * 1;

  var dirY = this.y < target.y ? -1 : 1;
  this.y -= dirY * 1;
};

module.exports = Monster;
