import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default class GameModel extends Model {
  @attr('string') code;
  @attr('number') status;
  @attr('number') total_users;
  @attr('number') winner_id;
  @attr('string') winner_name;
  @attr('number') total_users;
  @belongsTo('user') user;
  @hasMany('play') plays;

  get getStatus() {
    let statusString='';
    if(this.status===1){
      statusString="CREATED"
    }
    else if(this.status===2){
      statusString="STARTED";
    }
    else if(this.status===3){
      statusString="COMPLETED";
    }
    return statusString;
  }

  get getColorStatus(){
    let statusString='';
    if(this.status===1){
      statusString="black"
    }
    else if(this.status===2){
      statusString="blue";
    }
    else if(this.status===3){
      statusString="success";
    }
    return statusString;
  }
}

// import DS from 'ember-data';
// const { Model, attr, belongsTo } = DS;
//
// export default class TweetModel extends Model {
// 	@attr('string') description;
// 	@belongsTo('user') user;
// }
