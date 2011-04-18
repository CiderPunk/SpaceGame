var Player = Entity.extend({
	ang:0,	
	frame:null,
	init:function(){
		ResMan.loadImage('ship','gfx/ship.png');
		var oFrame = new Frame(['ship',0,0,12,16,6,8]);
	}



});


