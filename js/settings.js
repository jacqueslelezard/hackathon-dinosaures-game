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
{
  id: "ichtyo",
  name: "Ichtyosaure",
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
  stay:[{duration:2, bezier:{type:'soft', values:[{x:300, y:200}, {x:724, y:0}]}}],
  sink:this.fly
};

settings.levels = [
	{
		id: 1,
		name:"Trias",
		background:"",
		foreground:"",
		dinosaures: [0, 5],
		dinosauresMove: ['fly', 'swim'],
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
		dinosaures: [2, 3],
		dinosauresMove: ['walk', 'walk'],
		winners: [2, 3],
		help: "et tente de traverser la forêt du Jurassique.",
		info: "<br/>L’ichtyosaure ressemblait aux dauphins de maintenant. Comme eaux, ils nageaient très vite, devaient respirer de l’air à la surface de la mer, mangeaient des poissons et vivipares. Ils mesuraient entre un et dix mètres de longueur (environ un bus)<br/><br/> L’ichtyosaure n’est pas un dinosaure, il est apparu 20 millions d’années avant !!<br/><br/>L’ichtyosaure est apparu il y a 250 millions d’années et a disparu il y a 90 millions d’années.",
		infoimg: "diplo"
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
