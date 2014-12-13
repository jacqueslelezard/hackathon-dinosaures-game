var currentDino = "aucun";
var currentLevel = 0;

var Menu = {
  color: '#ffffff',
  init: function init() {
    this.display();
    this.select();
  },
  display: function () {
    for(var dino in settings.levels[currentLevel].dinosaures){
      $('section .menu').append('<div class="menu-dino" id="' + settings.dinosaures[dino].id + '" data-index=' + dino + '>' + settings.dinosaures[dino].name + '</div>');
    }
    setTimeout(function(){
      $('.menu-dino').on('click', function(){
        currentDino = $(this).data('index');
        $('.beast').html("<img src='img/"+$(this).attr('id')+".png'/>");
      });
    }, 0);
  },
  select: function() {
    //sélection du dinosaure
    $("section .menu").click(function(){
      Scene.play();
      $("section .menu").slideUp(300);
    })

    //assigne le background correspondant au niveau
    $("#container").css("background-image", "url('img/niveau"+currentLevel+"bg.png')");
    $("#foreground").attr("src", "img/niveau"+currentLevel+"fg.png");
    $(".feedback").html("Epoque "+currentLevel+" : le "+settings.level[currentLevel-1].name+
                        "<div class='help'>Choisis ta monture pour tenter de traverser les plaines du Trias.</div>"+
                        "<span class='check'>C'est parti !</span>");
    //gestion des feedback
    $(".feedback").on('click', function(){
      $(".feedback").fadeOut(200);
      $(".menu").slideDown(300);
    });
  }
}

var Scene = {
  play: function () {
    console.log(settings.levels[currentLevel]);
    animate(settings.levels[currentLevel].dinosauresMove[currentDino], this.end);
  },
  end: function() {
    var indexDino = settings.levels[currentLevel].dinosaures[currentDino];
    if($.inArray(indexDino, settings.levels[currentLevel].winners)) {
      alert('WIN');
    }
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
  $(".menu").hide();
});
