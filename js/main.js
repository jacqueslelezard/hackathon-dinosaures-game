var Menu = {
  color: '#ffffff',
  init: function init() {
    //this.settings = settings;
    this.display();
  },
  display: function () {
  	for(var dino in settings){
  		$('section .menu').append("<section class='menu-dino'>"+settings[dino]['name']+"</section>");
  	}
  }
}

$(function(){
  Menu.init();
})
