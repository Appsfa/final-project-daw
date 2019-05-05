import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
import { inject as service } from '@ember/service';

export default class AppGamesController extends Controller {
  @action onSubmit(){
		let x = this.store.createRecord("game");
		x.save().then((data) => {
      console.log(data.code);
      $("#bodyModalGame").html(`Juego ${data.code} creado`);
      $("#modalGame").modal('show');
    });
	}

  @service('user') user_global;

  @tracked user_username = this.user_global.getCookie("username");
  @tracked user_id = this.user_global.getCookie("id");
  @tracked user_email = this.user_global.getCookie("email");

  @action async joinGame(id_game) {
    let play = this.store.createRecord('play');
    await this.store.findRecord('user', this.user_id).then(function(user) {
       play.set('user', user);
      });
    await this.store.findRecord('game', id_game).then(function(game) {
       play.set('game', game);
      });
    play.save()
    }

  // @action joinGame(id_game){
  //   console.log(id_game, this.user_id);
  //   let us = this.user_id;
  //   let play = this.store.createRecord('play');
  //   play.set('user', this.user_id);
  //   play.set('game', id_game);
  //   play.save()
    // var obJSON = {
    //   'game_id': id_game,
    //   'user_id': us
    // }
    // $.ajax({
    //   url: 'https://polar-basin-61192.herokuapp.com/plays',
    //   type: 'POST',
    //   dataType: 'json',
    //   data: obJSON,
    //   success: function(data){
    //     console.log(data);
    //   }
    // });


    // let y= this.store.createRecord('play',	{
		// 	game_id:gameId,
		// 	user_id: id,
		// });
  // }

}
