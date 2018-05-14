// import DS from 'ember-data';
//
// export default DS.Model.extend({
//
// });

import DS from 'ember-data';

export default DS.Model.extend({
  build:DS.attr(),
  carfax_1_owner:DS.attr(),
  carfax_clean_title:DS.attr(),
  data_source:DS.attr(),
  dealer:DS.attr(),
  dom:DS.attr(),
  dom_180:DS.attr(),
  dom_active:DS.attr(),
  exterior_color:DS.attr(),
  first_seen_at:DS.attr(),
  first_seen_at_date:DS.attr(),
  heading:DS.attr(),
  interior_color:DS.attr(),
  inventory_type:DS.attr(),
  last_seen_at:DS.attr(),
  media:DS.attr(),
});
