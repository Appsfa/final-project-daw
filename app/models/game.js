import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class GameModel extends Model {
  @attr('string') code;
  @attr('string') status;
  @attr('string') winner_id;
  @attr('string') winner_name;
  @attr('string') total_users;
  @hasMany('play') play;
}

// import DS from 'ember-data';
// const { Model, attr, belongsTo } = DS;
//
// export default class TweetModel extends Model {
// 	@attr('string') description;
// 	@belongsTo('user') user;
// }
