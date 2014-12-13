var currentDino="aucun";
var currentLevel=1;

var Menu = {
  color: '#ffffff',
  init: function init() {
    this.display();
    this.select();
  },
  display: function () {
  	for(var dino in settings.level[currentLevel-1].dinosaures){
  			$('section .menu').append('<div class="menu-dino" id=' + settings.dinosaures[dino].id + '>' + settings.dinosaures[dino].name + '</div>');//.append("<section class='menu-dino' onclick='currentDino="+settings['dinosaures'][dino]['id']+"'>"+settings['dinosaures'][dino]['name']+"</section>");
  	}
  	setTimeout(function(){
  		$('.menu-dino').on('click', function(){
  			currentDino = $(this).attr('id');
  			$('.beast').append("<img src='img/"+$(this).attr('id')+".png'/>");
  		});
  	}, 0);
  },
  select: function() {
    //sélection du dinosaure
    $("section .menu").click(function(){
      console.log(currentDino);
      Scene.play();
      $("section .menu").slideUp(300);
    })

    //assigne le background correspondant au niveau
    $("#container").css("background-image", "url('img/niveau"+currentLevel+"bg.png')");
    $(".feedback").html("Niveau "+currentLevel+" : "+settings.level[currentLevel-1].name+"<span class='check'>C'est parti !</span>");

    //gestion des feedback
    $(".feedback").on('click', function(){
      $(".feedback").fadeOut(200);
      $(".menu").slideDown(300);
    });
  }
}

var Scene = {
  init: function init() {
  },
  play: function move() {
    animate('fly');
  }
}

function animate(type, cb) {
  var animation = settings.animations[type];
  if(! animation) return;
  var tl = new TimelineMax({repeat:0, onComplete:cb, delay:1});
  for(var step in animation) {
    tl.add(new TweenMax(".beast", animation[step].duration || 1, $.extend(animation[step], {ease:animation[step].ease || Linear.easeNone})));
  }
}

$(function(){
  Menu.init();
  Scene.init();
  $(".menu").hide();
});
