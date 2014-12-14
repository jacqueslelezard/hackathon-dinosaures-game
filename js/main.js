var currentDino = "aucun";
var currentLevel = 0;

var Menu = {
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
        $('.beast').html("<img src='img/"+$(this).attr('id')+"LL.png'/><img src='img/"+$(this).attr('id')+"LL2.png'/>");
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
    $(".end").on('click', function(){
      $(".end").fadeOut(200);
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
      //changement de niveau
      $('.end').html("Bien joué a traversé l'ère du "+settings.levels[currentLevel].name+" !");
      currentLevel=currentLevel+1;
      $('.feedback').fadeIn(300);
      $('.end').fadeIn(300);
      //repositionnement dino
      Transition.reset();
      //reset menu
      $('section .menu').html("");
      Transition.reset();
      Menu.init();

    } else {
      //changement de niveau
      currentLevel=currentLevel;
      $('.feedback').fadeIn(300);
      //repositionnement dino
      //reset menu
      $('section .menu').html("");
      Transition.reset();
      Menu.init();
      $('.end').html("Dommage, ta monture n'était pas adaptée, retente ta chance !");
      $('.end').fadeIn(300);
    }
  }
}

var Transition = {
  tl: null,
  interval: null,
  cb: function(){},
  animate: function (type, cb) {
    var animation = settings.animations[type];
    if(! animation) return;
    this.cb = cb;
    this.tl = new TimelineMax({repeat:0, onComplete:$.proxy(this.afterAnimate, this), delay:1});
    for(var step in animation) {
      this.tl.add(new TweenMax(".beast", animation[step].duration || 1, $.extend(animation[step], {ease:animation[step].ease || Linear.easeNone})));
    }
    this.startSprite();
  },
  afterAnimate: function() {
    this.stopSprite();
    this.cb();
  },
  reset: function() {
    this.tl.pause(0, true);
  },
  startSprite: function() {
    this.interval = setInterval(function() {
      var item =  $(".beast img").index(0);
      item.css('display', item.css('display') === 'none' ? 'block' : 'none');
    }, 500);
  },
  stopSprite: function() {
    clearInterval(this.interval);
  }
}

$(function(){
  Menu.init();
  $(".menu").hide();
  $(".end").hide();
});
