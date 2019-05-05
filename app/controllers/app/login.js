import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class AppLoginController extends Controller {
  @service('user') user_global;



  @action onSubmit(event){

    event.preventDefault();


    // this.user_global.setCookie("username", $("#txtUser").val().toString(), 1);
    this.user_global.set('username', $("#txtUser").val().toString());
    this.user_global.login($("#txtUser").val().toString());
    // this.store.query('user', {username: $("#txtUser").val().toString()})
    // console.log();
    // console.log(storage);

  }
}
