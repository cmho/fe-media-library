import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			album: this.store.peekRecord('album', params.album_id),
			artist: this.store.peekRecord('artist', params.artist_id)
		});
	}
});