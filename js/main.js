var currentDino="aucun";
var currentLevel=1;


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
//génération des dinosaures disponibles dans le menu
$(function(){
  Menu.init();
  $(".menu").hide();
})

//sélection du dinosaure
$("section .menu").click(function(){
	console.log(currentDino);
	$("section .menu").hide(300);
})

//assigne le background correspondant au niveau
$("#container").css("background-image", "url('img/niveau"+currentLevel+"bg.png')");
$(".feedback").html("Niveau "+currentLevel+" : "+settings.niveau[currentLevel-1].name+"");

//gestion des feedback
$(".feedback").on('click', function(){
	$(".feedback").fadeOut(200);
	$(".menu").show(300);
});