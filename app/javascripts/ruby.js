'use strict';

// Ruby hérite de StaticOject
var Ruby = function(game, x, y, image_name) {
  this.image_name = image_name || 'ruby';
  StaticOject.call(this, game, x, y, this.image_name);
}

Ruby.prototype.constructor = StaticOject;
Ruby.prototype = Object.create(StaticOject.prototype);
