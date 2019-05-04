import Identicon from 'identicon.js';
import sha1 from 'js-sha1';

import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class UserModel extends Model {
  @attr('string') username;
  @attr('string') email;
  @hasMany('game') games;
  @hasMany('play') plays;
  // @hasMany('game') games;

  get avatar(){
    // console.log(sha1(this.username));
    // let hash = sha1(this.username);
    let data = new Identicon('12345678765432345678').toString();
    return `data:image/png;base64,${data}`;
  }

  get games(){
    // let this.store.query('game', {winner_id: this.user})
  }
}
