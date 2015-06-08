'use strict';

var Touchable = require('./concerns/touchable');
var Movable = require('./concerns/movable');
var StaticObject = require('./staticObject');

// Player hérite de StaticObject
var Monster = function(game, x, y, image_name) {
  StaticObject.call(this, game, x, y, image_name);
  this.actions = [];
  this.speed = 2;
}
Monster.prototype = Object.create(StaticObject.prototype);
Monster.prototype.constructor = StaticObject;

// Méthodes d'instance
var instanceMethods = {

  follow: function() {
    var dirX = this.x < this.target.x ? -1 : 1;
    this.x -= dirX * 1;

    var dirY = this.y < this.target.y ? -1 : 1;
    this.y -= dirY * 1;
  },
  execute: function() {
    if (this.executed_index == undefined || this.executed_index >= this.actions.length) {
      this.executed_index = 0;
    }
    var action = this.actions[this.executed_index];
    this[action.direction](action.speed);
    this.executed_index++;
  },
  // Peuple le tableau d'actions selon le type du monstre
  loadActions: function(actions) {
    var repeat;
    _.each(actions, _.bind(function(action) {
      repeat = action.repeat || 1;
      _(repeat).times(_.bind(function(i){
        this.actions.push(action);
      }, this));
    }, this));
  }
};

// Méthodes static
Monster.build = function(game, monstersData) {
  var monsters = [];
  var number;
  var monster;
  _.each(monstersData, _.bind(function(monsterType) {
    number = monsterType.number || 1;
    _(number).times(_.bind(function(n){
      monster = new Monster(game, _.random(10, 450), _.random(10, 450), monsterType.image_name);
      monster.loadActions(monsterType.actions);
      monsters.push(monster);
    }, this));
  }, this));
  return monsters;
};

// Mixins
_.extend(Monster.prototype, Touchable.prototype);
_.extend(Monster.prototype, Movable.prototype);
_.extend(Monster.prototype, instanceMethods);

module.exports = Monster;
