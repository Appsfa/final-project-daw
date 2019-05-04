import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppScoresRoute extends Route {
  model(){
    let ashes = hash({
      user: this.store.findAll('user'),

    });

    return ashes;
  }

    // plays: this.store.query('play', {game_id: params.game_id})
}
