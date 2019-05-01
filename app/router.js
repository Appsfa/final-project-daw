import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('games');
  this.route('app', {path: '/'}, function() {
    this.route('games');
  });
});

export default Router;
