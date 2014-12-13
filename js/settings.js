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
  id: "diplo",
  name: "Diplodocus",
  //niveaux: [1,2,3 ] ,
}];

settings.animations = {
  //fly:[{x:100, y:-100}, {x:500}, {x:600, y:0}],
  fly:[{duration:2, bezier:{type:'soft', values:[{x:300, y:-300}, {x:724, y:0}]}}],
  fall:[],
  stop:[],
  stopFly:[],
  swim:[],
  stay:[],
  sink:[]
};

settings.levels = [
	{
		id: 1,
		name:"Trias",
		background:"",
		foreground:"",
		dinosaures: [0, 2],
		dinosauresMove: ['fly', 'fly'],
		winners: [0]
	}
];
