var Entity = PClass.create({
	X:0,
	Y:0,
	dX:0,
	dY:0,

	init:function(x,y){
    X=x;
    Y=y;
	},

	update:function(oMap){
		X+=dX;
		Y+=dY;
	},
  
	draw: function(oCtx,xoffs,yoffs){
	  
  
  }
});

var Projectile = Entity.extend({
	init:function(oMap,x,y,angle,v){
		dX = v * Math.sin(angle);
		dY = v * Math.cos(angle);
	}

});