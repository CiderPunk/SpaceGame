var Entity = PClass.create({
	
	X:0,
	Y:0,
	dX:0,
	dY:0,

	init:function(oMap,x,y){

	},

	update:function(){
		X+=dX;
		Y+=dY;
	},

	draw: function(x,y){
	}


});

var Projectile = Entity.extend({
	init:function(oMap,x,y,angle,v){
		dX = v * Math.sin(angle);
		dY = v * Math.cos(angle);
	}

});