import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class PlayModel extends Model {
  @attr('string') choice;
  @belongsTo('user') user;
  @belongsTo('game') game;
}
