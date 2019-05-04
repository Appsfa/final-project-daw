import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', {path: '/'}, function() {
    this.route('games');

    this.route('room', function() {
      this.route('game', {path: '/:game_id'});
    });
  });
});

export default Router;
