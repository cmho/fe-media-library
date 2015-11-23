import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			artist: this.store.peekRecord('artist', params.artist_id),
			album: this.store.query('album', {filter: {artist_id: params.artist_id}})
		});
	}
});