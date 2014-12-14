var currentDino = 0; 
var indexDino = 0;
var currentLevel = 4;

var Menu = {
  init: function init() {
    this.display();
    this.select();
  },
  display: function () {
    var index = 0;

    for(var dino in settings.levels[currentLevel].dinosaures){
      index = settings.levels[currentLevel].dinosaures[dino];
      $('section .menu').append('<div class="menu-dino" data-index-dino="' + dino + '" id="' + settings.dinosaures[index].id + '" data-index=' + dino + '>' + settings.dinosaures[index].name + '</div>');
    }
    setTimeout(function(){
      $('.menu-dino').on('click', function(){
        currentDino = $(this).data('index');
        indexDino = $(this).data('index-dino'); 
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
    $("body").attr("id", ("niveau"+(currentLevel+1)));
    $("#foreground img").attr("src", "img/niveau"+(currentLevel+1)+"fg.png");
    $(".feedback").html("<span class='epoque'>Epoque " + (currentLevel + 1) + " : le "+settings.levels[currentLevel].name+
                        "</span><div class='help'>Choisis ta monture "+settings.levels[currentLevel].help+"</div>"+
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
    if($.inArray(indexDino, settings.levels[currentLevel].winners) !== -1) {
      if(currentLevel === 4) {
        Transition.armageddon();
        return;
      }
      //changement de niveau
      $('.end').html("<span class='epoque'>Bien joué tu a traversé l'ère du "+settings.levels[currentLevel].name+" !</span>");
      $('.end').append("<div class='info'>"+settings.levels[currentLevel].info+"<br/><img src='img/"+settings.levels[currentLevel].infoimg+".png'/><span class='check'>Continuer !</span> <span class='retour'><a href='http://htmlpreview.github.io/?https://github.com/vripoche/hackathon-dinosaures-game/blob/master/index.html'>Retour au livre !</span></div>");
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
    var duration = 0;
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
    if(this.interval) clearInterval(this.interval);
    this.interval = setInterval(function() {
      var item =  $(".beast img:eq(0)");
      item.css('display', item.css('display') === 'none' ? 'block' : 'none');
    }, 300);
  },
  stopSprite: function() {
    clearInterval(this.interval);
  },
  armageddon: function() {
    $(".stone").animate({top:-200}, 100, 'linear', function() {
      $('.stone').box2d({'y-velocity':100});
    });
  }
}

$(function(){
  Menu.init();
  $(".menu").hide();
  $(".end").hide();
});
