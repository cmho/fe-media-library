import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	year: DS.attr('number'),
	total_sold: DS.attr('number'),
	updated_at: DS.attr('date'),
	artist_id: DS.belongsTo('artist'),
	comment_ids: DS.hasMany('comment')
});