import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class GameModel extends Model {
  @attr('string') code;
  @attr('string') status;
  @attr('number') total_users;
  @attr('number') winner_id;
  @attr('string') winner_name;
  @attr('number') total_users;
  @hasMany('play') plays;
}

// import DS from 'ember-data';
// const { Model, attr, belongsTo } = DS;
//
// export default class TweetModel extends Model {
// 	@attr('string') description;
// 	@belongsTo('user') user;
// }
