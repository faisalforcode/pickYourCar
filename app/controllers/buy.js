import Controller from '@ember/controller';

export default Controller.extend({
	
  	sortAscending: false, // sorts post by timestamp
 	actions: {
    submit: function() {
    	var name = this.get("firsstname");
      var buy = this.store.createRecord('buy', {
      firstname: this.get('firstName'),
	   	lastname: this.get('lastName'),
	   	phone: this.get('contactNumber'),
	   	address: this.get('address'),
	   	creditNbr: this.get('number'),
	   	name: this.get('name'),
	   	expiry: this.get('expiration'),
	   	cvc: this.get('cvc'),
	    email: this.get('email'),    
      });
      buy.save();
      this.transitionToRoute('confirmation');
    }
  }
});
