'use strict';

var Touchable = require('./concerns/touchable');
var StaticObject = require('./staticObject');

// Player hérite de StaticObject
var Monster = function(game, x, y, image_name) {
  StaticObject.call(this, game, x, y, image_name);
}
Monster.prototype = Object.create(StaticObject.prototype);
Monster.prototype.constructor = StaticObject;

// Méthodes d'instance
var instanceMethods = {

  follow: function(target) {
    var dirX = this.x < target.x ? -1 : 1;
    this.x -= dirX * 1;

    var dirY = this.y < target.y ? -1 : 1;
    this.y -= dirY * 1;
  }
};

// Méthodes static
Monster.build = function(game, number) {
  var image_name;
  var monsters = [];
  var monster;
  _(number).times(_.bind(function(n){
    image_name = _.sample(['ghost1', 'ghost2', 'ghost3', 'dark_knight', 'hornet', 'undead', 'cactuar']);
    monster = new Monster(game, _.random(10, 450), _.random(10, 450), image_name);
    monsters.push(monster);
  }, this));
  return monsters;
}

// Mixins
_.extend(Monster.prototype, Touchable.prototype);
_.extend(Monster.prototype, instanceMethods);

module.exports = Monster;
