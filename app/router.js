import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('index', {path: '/'});
	this.route('artists', function () {
		this.route('artist', {path: '/:artist_id'});
	});
	this.route('albums', function () {
		this.route('album', {path: '/:album_id'});
	});
});

export default Router;