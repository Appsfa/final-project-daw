import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class SubgameModel extends Model {
  @attr('string') code;
  @attr('number') status;
  @attr('number') total_users;
  @attr('number') winner_id;
  @attr('string') winner_name;
  @attr('number') total_users;
  @belongsTo('subuser') users;
  // @belongsTo('user') users;

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
