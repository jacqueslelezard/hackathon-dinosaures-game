var currentDino = "aucun";
var currentLevel = 0;

var Menu = {
  color: '#ffffff',
  init: function init() {
    this.display();
    this.select();
  },
  display: function () {
    var index = 0;
    for(var dino in settings.levels[currentLevel].dinosaures){
      index = settings.levels[currentLevel].dinosaures[dino];
      $('section .menu').append('<div class="menu-dino" id="' + settings.dinosaures[index].id + '" data-index=' + dino + '>' + settings.dinosaures[index].name + '</div>');
    }
    setTimeout(function(){
      $('.menu-dino').on('click', function(){
        currentDino = $(this).data('index');
        $('.beast').html("<img src='img/"+$(this).attr('id')+"LL.png'/>");
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
    $("#container").css("background-image", "url('img/niveau" + (currentLevel + 1) + "bg.png')");
    $("#foreground").attr("src", "img/niveau"+currentLevel+"fg.png");
    $(".feedback").html("Epoque " + (currentLevel + 1) + " : le "+settings.levels[currentLevel].name+
                        "<div class='help'>Choisis ta monture "+settings.levels[currentLevel].help+"</div>"+
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
    Transition.animate(settings.levels[currentLevel].dinosauresMove[currentDino], this.end);
  },
  end: function() {
    var indexDino = settings.levels[currentLevel].dinosaures[currentDino];
    if($.inArray(indexDino, settings.levels[currentLevel].winners)) {
      alert('WIN');
      //changement de niveau
      currentLevel=currentLevel+1;
      $('.feedback').fadeIn(300);
      //repositionnement dino
      Transition.reset();
      //reset menu
      $('section .menu').html();
      Menu.init();

    } else {
      alert('LOSE');
    }
  }
}

var Transition = {
  tl: null,
  animate: function (type, cb) {
    var animation = settings.animations[type];
    if(! animation) return;
    this.tl = new TimelineMax({repeat:0, onComplete:cb, delay:1});
    for(var step in animation) {
      this.tl.add(new TweenMax(".beast", animation[step].duration || 1, $.extend(animation[step], {ease:animation[step].ease || Linear.easeNone})));
    }
  },
  reset: function() {
    this.tl.pause(0, true);
  },
  animateSprite: function() {
  }
}

$(function(){
  Menu.init();
  $(".menu").hide();
});
