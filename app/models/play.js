import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class PlayModel extends Model {
  @belongsTo('user') user;
  @belongsTo('game') game;
  // @attr('number') user_id;
  // @attr('number') game_id;
  @attr('number') choice;

  get getChoice(){
    switch (this.choice){
      case 1:
        return "Rock";
      break;

      case 2:
        return "Paper";
      break;

      case 3:
        return "Scissors";
      break;

      case 4:
        return "Lizard";
      break;

      case 5:
        return "Spock";
      break;

      default:
        return "No choice";
      break;
    }
  }

}
