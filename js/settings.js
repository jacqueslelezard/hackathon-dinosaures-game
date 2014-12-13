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
  name: "Liopleusaure",
  //niveaux: [1,2,3 ] ,
},
];

settings.animations = {
  //fly:[{x:100, y:-100}, {x:500}, {x:600, y:0}],
  fly:[{duration:2, bezier:{type:'soft', values:[{x:300, y:-300}, {x:724, y:0}]}}],
  fall:[{duration:1, bezier:{type:'soft', values:[{x:100, y:-100}, {x:200, y:200}]}}],
  walk:[{duration:2, x:724}],
  stop:[{duration:1, x:300}],
  stopFly:[{duration:1, bezier:{type:'soft', values:[{x:200, y:-400}, {x:300, y:-300}]}}],
  swim:[],
  stay:[{duration: .5, y:-50}, {duration: .5, y:0}, {duration: .5, y:-100}, {duration: .5, y:0}],
  sink:[]
};

settings.levels = [
	{
		id: 1,
		name:"Trias",
		background:"",
		foreground:"",
		dinosaures: [0, 5],
		dinosauresMove: ['fly', 'fly'],
		winners: [0, 5],
		help: "et tente d'arriver sur l'autre rive de la mer du Trias."
	},
	{
		id: 2,
		name:"Jurassique",
		background:"",
		foreground:"",
		dinosaures: [2, 3, 4],
		dinosauresMove: ['fly', 'fly'],
		winners: [2, 4],
		help: "et tente de traverser la forêt du Jurassique."
	},
	{
		id: 3,
		name:"Crétacé Inférieur",
		background:"",
		foreground:"",
		dinosaures: [1, 5, 1],
		dinosauresMove: ['fly', 'fly'],
		winners: [1, 5, 1],
		help: "et tente de traverser les plaines du Crétacé."
	},
	{
		id: 4,
		name:"Crétacé Supérieur",
		background:"",
		foreground:"",
		dinosaures: [1, 2, 5],
		dinosauresMove: ['fly', 'fly'],
		winners: [2],
		help: "et tente d'atteindre les hautes falaises."
	}
];
