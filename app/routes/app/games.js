import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import {action} from "@ember/object";

export default class AppGamesRoute extends Route {
  // model () {
	// 	// return this.store.query('tweet', { user_id: 1 });
	// 	// return this.store.findAll('tweet');
  //
  model(){
		return hash({
      user: this.store.findAll('user'),
			game: this.store.findAll('game'),
      play: this.store.findAll('play'),
		});
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
				users: this.store.findAll('user')
			})
		}, 500);
	}

  // model(){
	// 	return this.store.findAll("game");
	// }
}
