import DS from 'ember-data';

export default DS.Model.extend({
	username: DS.attr('string'),
	album_id: DS.belongsTo('album'),
	content: DS.attr('string')
});