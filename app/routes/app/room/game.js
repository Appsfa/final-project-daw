import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import {action} from "@ember/object";
// export { default } from 'ember-truth-helpers/helpers/equal';

export default class AppRoomGameRoute extends Route {
  model(params){
    let aux = hash({
      game: this.store.findRecord('game', params.game_id),
      plays: this.store.query('play', {game_id: params.game_id})
    });


    return aux;
  }

  @action
	willTransition () {
		clearInterval(this.poll);
	}

	@action
	didTransition () {
		this.poll = setInterval(async () => {
			//polling
			return hash({
				games: this.store.findAll('game'),
				users: this.store.findAll('play')
			})
		}, 500);
	}

}
