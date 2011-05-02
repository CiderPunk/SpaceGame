var Entity = PClass.create({
  Pos:new Coord(0,0),
	Speed: new Coord(0,0),
  
	init:function(oCoord){
    this.Pos = oCoord;
  },

	update:function(oMap){
		Pos = Pos.add(Speed);
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