import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	willInsertElement() {
		console.log(this.get('artistid'));
		Ember.$.getJSON('/api/artists/'+this.get('artistid')).then(data => {
			this.set('artist', data.artist);
		});
	}
});