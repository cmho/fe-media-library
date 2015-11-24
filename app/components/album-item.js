import Ember from 'ember';

export default Ember.Component.extend({
	willInsertElement() {
		Ember.$.getJSON('/api/albums/'+this.get('albumid')).then(data => {
			this.set('album', data.album);
		});
	}
});