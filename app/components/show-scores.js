import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";

export default class ShowScoresComponent extends Component {
  @tracked user = this.args.user || [];
}
