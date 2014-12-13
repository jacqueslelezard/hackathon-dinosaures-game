var currentDino="aucun";
var currentLevel=0;


var Menu = {
  color: '#ffffff',
  init: function init() {
    //this.settings = settings;
    this.display();
  },
  display: function () {
  	for(var dino in settings["dinosaures"]){
  		$('section .menu').append('<div class="menu-dino" id=' + settings.dinosaures[dino].id + '>' + settings.dinosaures[dino].name + '</div>');//.append("<section class='menu-dino' onclick='currentDino="+settings['dinosaures'][dino]['id']+"'>"+settings['dinosaures'][dino]['name']+"</section>");
  	}
  	setTimeout(function(){
  		$('.menu-dino').on('click', function(){
  			currentDino = $(this).attr('id');
  			$('.beast').append("<img src='img/"+$(this).attr('id')+".png'/>");
  		});
  	}, 0);
  }
}

$("section .menu").click(function(){
	console.log(currentDino);
	$("section .menu").hide(300);
})

$(function(){
  Menu.init();
})
