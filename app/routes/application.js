import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		Ember.$.getJSON('/api/artists').then(data => {
			this.store.pushPayload({artists: data.artists});
		});
		Ember.$.getJSON('/api/albums').then(data => {
			this.store.pushPayload({albums: data.albums});
		});
		Ember.$.getJSON('/api/comments').then(data => {
			this.store.pushPayload({comments: data.comments});
		});
	}
});