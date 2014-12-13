var Menu = {
  color: '#ffffff',
  init: function init() {
    //this.settings = settings;
    this.display();
  },
  display: function () {
  	for(var dino in settings["dinosaures"]){
  		$('section .menu').append("<section class='menu-dino'>"+settings["dinosaures"][dino]['name']+"</section>");
  	}
  }
}

$(function(){
  Menu.init();
})
