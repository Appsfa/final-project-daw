import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class AppScoresController extends Controller {

  @action onLoad(user){
    console.log(user.id);
  }

  
}
