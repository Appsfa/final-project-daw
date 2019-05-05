import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

export default class FormLoginComponent extends Component {
  // @computed
  // get getUser() {
  //   return getOwner(this).lookup('service:user');
  // }
}
