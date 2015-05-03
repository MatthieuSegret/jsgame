'use strict';

var StaticObject = require('./staticObject');

// Ruby hérite de StaticObject
var Ruby = function(game, x, y, image_name) {
  this.image_name = image_name || 'ruby';
  StaticObject.call(this, game, x, y, this.image_name);
}

Ruby.prototype.constructor = StaticObject;
Ruby.prototype = Object.create(StaticObject.prototype);

module.exports = Ruby;
