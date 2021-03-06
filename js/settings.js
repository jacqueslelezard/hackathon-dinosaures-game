var settings={};

settings.dinosaures= [
{
  id: "ptero",
  name: "Ptérosaure",
  //niveaux: [1,2] ,
},
{
  id: "velo",
  name: "Vélociraptor",
  //niveaux: [2,3] ,
},
{
  id: "allo",
  name: "Allosaure",
  //niveaux: [1,2,3 ] ,
},
{
  id: "diplo",
  name: "Diplodocus",
  //niveaux: [1,2,3 ] ,
},
{
  id: "liopleu",
  name: "Liopleurodon",
  //niveaux: [1,2,3 ] ,
},
{
  id: "ichtyo",
  name: "Ichtyosaure",
  //niveaux: [1,2,3 ] ,
},
{
  id: "stego",
  name: "Stégosaure",
  //niveaux: [1,2,3 ] ,
},
{
  id: "trice",
  name: "Tricératops",
  //niveaux: [1,2,3 ] ,
},
{
  id: "coelo",
  name: "Coelophysis",
  //niveaux: [1,2,3 ] ,
},
{
  id: "plio",
  name: "Pliosaure",
  //niveaux: [1,2,3 ] ,
},
];

settings.animations = {
  fly:[{duration:2, bezier:{type:'soft', values:[{x:300, y:-300}, {x:724, y:0}]}}],
  fall:[{duration:1, bezier:{type:'soft', values:[{x:100, y:-100}, {x:200, y:200}]}}],
  walk:[{duration:3, x:724}],
  stop:[{duration:1, x:300}],
  stopFly:[{duration:1, bezier:{type:'soft', values:[{x:200, y:-400}, {x:300, y:-300}]}}],
  swim:[{x:100, y:50}, {x:600}, {x:724, y:0}],
  stay:[{duration:.5, repeat: 2, bezier:{type:'soft', values:[{x:0, y:-50}, {x:0, y:0}]}}],
  sink:[{duration:1, bezier:{type:'soft', values:[{x:100, y:-100}, {x:200, y:200}]}}]
};

settings.levels = [
	{
		id: 1,
		name:"Trias",
		background:"",
		foreground:"",
		dinosaures: [0, 5, 8],
		dinosauresMove: ['fly', 'swim', 'sink'],
		winners: [0, 5],
		help: "et tente d'arriver sur l'autre rive de la mer du Trias.",
		info: "<br/>L’ichtyosaure ressemblait aux dauphins de maintenant. Comme eux, il nageaient très vite, devait respirer de l’air à la surface de la mer, mangeait des poissons et vivipares. Il mesurait entre un et dix mètres de long (environ un bus)<br/><br/> L’ichtyosaure n’est d'ailleurs pas un dinosaure, il est apparu 20 millions d’années avant !!!<br/>",
		infoimg: "ichtyo"
		},
	{
		id: 2,
		name:"Jurassique",
		background:"",
		foreground:"",
		dinosaures: [2, 3, 6, 5],
		dinosauresMove: ['walk', 'walk', 'walk', 'stay'],
		winners: [2, 3, 6],
		help: "et tente de traverser la forêt du Jurassique.",
		info: "Le stégosaure fait peur avec ses grosses piques sur le dos. Et pourtant ! Il était un animal bien tranquille, incapable de courir, qui passait ses journées à manger des herbes au ras du sol ; difficile de déplacer ses trois tonnes. <br/> Il mesurait quatre mètres de haut et huit de long.<br/><br/>Les piques du stégosaure changeaient peut-être de couleur afin d’impressionner ses ennemis !",
		infoimg: "stego"
	},
	{
		id: 3,
		name:"Jurassique coté océan",
		background:"",
		foreground:"",
		dinosaures: [9, 2, 4],
		dinosauresMove: ['swim', 'sink', 'swim'],
		winners: [4, 9],
		help: "et tente de traverser les mers du Jurassique.",
		info: "Le pliosaure était le plus grand prédateur des mers !! Il mangeait des calamars, des poissons et des reptiles marins. <br/>Il mesurait dix à treize mètres de long et pesait plusieurs tonnes<br/><br/>Le pliosaure a vécu entre -112 et -98 millions d’années avant notre ère.",
		infoimg: "plio"
	},
	{
		id: 4,
		name:"Crétacé",
		background:"",
		foreground:"",
		dinosaures: [1, 4, 7],
		dinosauresMove: ['walk', 'stay', "walk"],
		winners: [1, 7],
		help: "et tente de traverser les plaines du Crétacé.",
		info: "Le tricétatops est facilement reconnaissable avec son gros crâne, ses trois cornes et sa collerette ! Certains spécimens étaient recouverts de poils. <br/>Il mesurait neuf mètres de long et trois de haut.<br/><br/>Le tranquille tricératops se nourrissait d’herbes et de plantes. Il vivait à la même époque que le terrible tyrannosaure et constituait une proie facile.<br/>Le tricératops a vécu entre -68 et -65 millions d’années avant notre ère.",
		infoimg: "trice"
	},
	{
		id: 5,
		name:" dernier dinosaure...",
		background:"",
		foreground:"",
		dinosaures: [0, 6, 1],
		dinosauresMove: ['stop', 'stop', 'stop'],
		winners: [0,6,1],
		help: ".",
		infoimg: "velo"
	},
];
