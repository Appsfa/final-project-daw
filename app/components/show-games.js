import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
// import $ from 'jquery';

export default class ShowGamesComponent extends Component {
  @tracked game = this.args.game || [];
}
