export default Ember.Controller.extend({
	queryParams: ['artist_id'],
	artist_id: null,

	filteredAlbums: Ember.computed('artist_id', 'model', function () {
		var artist_id = this.get('artist_id');
		var albums = this.get('model');

		if (artist_id) {
			return albums.filterBy('artist_id', artist_id);
		} else {
			return albums;
		}
	})
});