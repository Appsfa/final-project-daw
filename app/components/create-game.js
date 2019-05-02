import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class CreateGameComponent extends Component {
  @action
	onSubmit () {

		this.args.handleSubmit()
	}
}
