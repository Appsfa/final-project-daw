import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import {tracked} from "@glimmer/tracking";

export default class FooterProjectComponent extends Component {
  @service('user') user_global;

  @tracked user_username = this.user_global.getCookie("username");
  @tracked user_id = this.user_global.getCookie("id");
  @tracked user_email = this.user_global.getCookie("email");

}
