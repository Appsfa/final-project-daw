import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class HeaderProjectComponent extends Component {
  @service('user') user_global;

  @tracked user_username = this.user_global.getCookie("username");
  @tracked user_id = this.user_global.getCookie("id");
  @tracked user_email = this.user_global.getCookie("email");

  // @action outSession(){
  //   console.log("this.user_username");
  //   this.user_global.logOut(this.user_username);
  // }
}
