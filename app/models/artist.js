import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	based_in: DS.attr('string'),
	founding_year: DS.attr('number'),
	updated_at: DS.attr('date'),
	album_ids: DS.attr(),
});