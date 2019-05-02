import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class AppGamesController extends Controller {
  @action onSubmit(){
		let x = this.store.createRecord("game");
		x.save().then((data) => {
      console.log(data.code);
      $("#modalGame").modal('show');
    });
	}
}
