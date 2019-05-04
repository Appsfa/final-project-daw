import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppRoomGameRoute extends Route {
  model(params){
    return hash({
      game: this.store.findRecord('game', params.game_id),
      plays: this.store.query('play', {game_id: params.game_id})
    })
  }

}
