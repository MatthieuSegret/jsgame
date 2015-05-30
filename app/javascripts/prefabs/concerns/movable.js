'use strict';

// Donne la capacité à un objet de se déplacer
var Movable = function() {}

Movable.prototype = {

  moveUp: function(speed) {
    speed = speed || this.speed || 2;
    this.y -= speed;
  },
  moveDown: function(speed) {
    speed = speed || this.speed || 2;
    this.y += speed;
  },
  moveLeft: function(speed) {
    speed = speed || this.speed || 2;
    this.x -= speed;
  },
  moveRight: function(speed) {
    speed = speed || this.speed || 2;
    this.x += speed;
  }
};

module.exports = Movable;
