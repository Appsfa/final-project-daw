import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class PlaysModel extends Model {
  // @belongsTo('user') user;
  // @belongsTo('game') game;
  @attr('number') user_id;
  @attr('number') game_id;
  @attr('number') choice;
}
