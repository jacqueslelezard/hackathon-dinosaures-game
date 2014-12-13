var Menu = {
  color: '#ffffff',
  init: function init() {
    this.display();
  },
  display: function () {
  	for(var dino in settings){
  		$('section .menu').append("<section class='menu-dino'>"+settings[dino]['name']+"</section>");
  	}
  }
}

var Scene = {
  init: function init() {
    this.play();
  },
  play: function move() {
    animate('fly');
  }
}

function animate(type) {
  var animation = settings.animations[type];
  if(! animation) return;
  var tl = new TimelineMax({repeat:0, onUpdate:function(){}, delay:1});
  for(var step in animation) { 
    tl.add(new TweenMax(".beast", 1, animation[step]));
  }
}

$(function(){
  Menu.init();
  Scene.init();
})
