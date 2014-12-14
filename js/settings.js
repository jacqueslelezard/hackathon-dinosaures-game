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
  walk:[{duration:2, x:724}],
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
		info: "<br/>L’ichtyosaure ressemblait aux dauphins de maintenant. Comme eaux, ils nageaient très vite, devaient respirer de l’air à la surface de la mer, mangeaient des poissons et vivipares. Ils mesuraient entre un et dix mètres de longueur (environ un bus)<br/><br/> L’ichtyosaure n’est pas un dinosaure, il est apparu 20 millions d’années avant !!<br/><br/>L’ichtyosaure est apparu il y a 250 millions d’années et a disparu il y a 90 millions d’années.",
		infoimg: "ichtyo"
		//help: "L’ichtyosaure ressemblait aux dauphins de maintenant. Comme eaux, ils nageaient très vite, devaient respirer de l’air à la surface de la mer, mangeaient des poissons et vivipares. Ils mesuraient entre un et dix mètres de longueur (environ un bus)<br/> L’ichtyosaure n’est pas un dinosaure, il est apparu 20 millions d’années avant !!<br/>L’ichtyosaure est apparu il y a 250 millions d’années et a disparu il y a 90 millions d’années."
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
		info: "Le stégosaure fait peur avec ses grosses piques sur le dos. Et pourtant ! Il était un animal bien tranquille, incapable de courir, qui passait ses journées à manger des herbes au ras du sol ; difficile de déplacer ses trois tonnes. <br/> Il mesurait 4 mètres de haut et huit mètres de long.<br/><br/>Les piques du stégosaure changeaient peut-être de couleur afin d’impressionner ses ennemis !",
		infoimg: "stego"
	},
	{
		id: 3,
		name:"Jurassique coté océan",
		background:"",
		foreground:"",
		dinosaures: [0, 2, 4],
		dinosauresMove: ['walk', 'sink', 'swim', 'swim'],
		winners: [4, 9],
		help: "et tente de traverser les mers du Jurassique.",
		info: "Le pliosaure était le plus grand prédateur des mers !! Il mangeait des calamars, des poissons et des reptiles marins. <br/>Il mesurait de 10 à 13 mètres de long et pesait plusieurs tonnes<br/><br/>Le pliosaure a vécu de 112 à 98 millions d’années avant notre ère.",
		infoimg: "liopleu"
	},
	{
		id: 4,
		name:"Crétacé",
		background:"",
		foreground:"",
		dinosaures: [1, 4],
		dinosauresMove: ['walk', 'stay'],
		winners: [1],
		help: "et tente de traverser les plaines du Crétacé.",
		info: "<br/>L’ichtyosaure ressemblait aux dauphins de maintenant. Comme eaux, ils nageaient très vite, devaient respirer de l’air à la surface de la mer, mangeaient des poissons et vivipares. Ils mesuraient entre un et dix mètres de longueur (environ un bus)<br/><br/> L’ichtyosaure n’est pas un dinosaure, il est apparu 20 millions d’années avant !!<br/><br/>L’ichtyosaure est apparu il y a 250 millions d’années et a disparu il y a 90 millions d’années.",
		infoimg: "velo"
	},
	{
		id: 5,
		name:"et tente d'échapper à l'apocalypse !!!",
		background:"",
		foreground:"",
		dinosaures: [0, 6, 1],
		dinosauresMove: ['stop', 'stop', 'stop'],
		winners: [0,6,1],
		help: ".",
		info: "<br/>L’ichtyosaure ressemblait aux dauphins de maintenant. Comme eaux, ils nageaient très vite, devaient respirer de l’air à la surface de la mer, mangeaient des poissons et vivipares. Ils mesuraient entre un et dix mètres de longueur (environ un bus)<br/><br/> L’ichtyosaure n’est pas un dinosaure, il est apparu 20 millions d’années avant !!<br/><br/>L’ichtyosaure est apparu il y a 250 millions d’années et a disparu il y a 90 millions d’années.",
		infoimg: "velo"
	},
];
