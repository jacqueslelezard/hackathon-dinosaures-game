var settings={};

settings.dinosaures= [
{
  id: "ptero",
  name: "Ptérosaure",
  niveaux: [1,2] ,
},
{
  id: "velo",
  name: "Vélociraptor",
  niveaux: [2,3] ,
},
{
  id: "diplo",
  name: "Diplodocus",
  niveaux: [1,2,3 ] ,
}];

settings.animations = {
  fly:[{x:100, y:-100}, {x:500}, {x:600, y:0}],
  fall:[],
  stop:[],
  stopFly:[],
  swim:[],
  stay:[]
};

settings.niveau = [
	{
		id: 1,
		name:"Trias",
		background:"",
		foreground:"",
		dinosaures: ["stego", "diplo"]
	}
];
