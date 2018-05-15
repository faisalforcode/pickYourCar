// import FirebaseAdapter from 'emberfire/adapters/firebase';
//
// export default FirebaseAdapter.extend({
// });
import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default FirebaseAdapter.extend({
 firebase: inject.service(),
});
