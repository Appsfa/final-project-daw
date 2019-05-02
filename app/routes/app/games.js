import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppGamesRoute extends Route {
  // model () {
	// 	// return this.store.query('tweet', { user_id: 1 });
	// 	// return this.store.findAll('tweet');
  //
  model(){
		return hash({
      user: this.store.findAll('user'),
			game: this.store.findAll('game')
		});
  }
  // model(){
	// 	return this.store.findAll("game");
	// }
}
