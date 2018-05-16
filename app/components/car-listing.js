import Component from '@ember/component';

export default Component.extend({
	isWide: false,
	classNames: ['dib'],
  isClicked: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
		showMenu: function(){
			this.toggleProperty('isClicked');
		}
  }
});
