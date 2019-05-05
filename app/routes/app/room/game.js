import Route from '@ember/routing/route';
import { hash } from 'rsvp';
// export { default } from 'ember-truth-helpers/helpers/equal';

export default class AppRoomGameRoute extends Route {
  model(params){
    let aux = hash({
      game: this.store.findRecord('game', params.game_id),
      plays: this.store.query('play', {game_id: params.game_id})
    });


    return aux;
  }

}
