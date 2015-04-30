'use strict';

// StaticOject
var StaticOject = function(game, x, y, image_name) {
  this.image_name = image_name;
  this.game = game;
  this.game.load.image(this.image_name, 'images/' + this.image_name + '.png');
  this._x = x;
  this._y = y;
}

StaticOject.prototype = {
  draw: function() {
    this.image = this.game.add.sprite(this._x, this._y, this.image_name);
  },

  get x() { return this.image.x; },
  set x(newX) { this.image.x = newX; },
  get y() { return this.image.y; },
  set y(newY) { this.image.y = newY; }
};
