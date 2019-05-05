import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class AppRoomGameController extends Controller {

  @service('user') user_global;

  @tracked user_username = this.user_global.getCookie("username");
  @tracked user_id = this.user_global.getCookie("id");
  @tracked user_email = this.user_global.getCookie("email");

  @action chooseOption(game, play){
    console.log(game, play);

    this.store.findRecord('play', play).then(function(play) {
      // ...after the record has loaded
      play.set('choice', $("#txtOption").val());
      play.save();
    });

  }
}
