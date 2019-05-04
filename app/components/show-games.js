import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";


export default class ShowGamesComponent extends Component {
  @tracked game = this.args.game || [];
}
