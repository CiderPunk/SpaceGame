var Player = Entity.extend({
  
	ang: -0.5 * Math.PI,	
	frame:null,
  thrust: 20,
  mass:100,
  frameOffset:0.5 * Math.PI,
  
	init:function(oCoord){
    this._super(oCoord);
    ResMan.loadImage('ship','gfx/ship.png');
		frame = new Frame(['ship',0,0,12,16,6,8]);
	},
  
  update:function(oMap){
    if (InputMan.state("left")){
      this.ang -= 0.1; 
    }
    if (InputMan.state("right")){
      this.ang += 0.1; 
    }
    
    var oForce;
    if (InputMan.state("up")){
      oForce =  Coord.fromAngle(this.ang, this.thrust);
    }
    else{
      oForce = new Coord();
    }
    //oForce = oForce.add(oMap.getGravity(this.Pos));
    oForce = oForce.sub(this.Speed.mply(oMap.getFriction(this.Pos)));
    var Acc = oForce.div(this.mass).add(oMap.getGravity(this.Pos));
    this.Speed = this.Speed.add(Acc); 
    this.Pos = this.Pos.add(this.Speed);
    
    //collision check
    if (this.Pos.X > oMap.Width){
      this.Pos.X = oMap.Width;
      //rebound
      this.Speed.X *= -1;
    }
    
    if (this.Pos.X < 0){
      this.Pos.X = 0;
      //rebound
      this.Speed.X *= -1;
    }
    
    if (this.Pos.Y > oMap.Height){
      this.Pos.Y = oMap.Height;
      //rebound
      this.Speed.Y *= -1;
    }
    
    if (this.Pos.Y < 0){
      this.Pos.Y = 0;
      //rebound
      this.Speed.Y *= -1;
    }
    
    
	},
  
  draw: function(oCtx,xoffs,yoffs){
	  frame.drawRot(oCtx, this.Pos.X-xoffs, this.Pos.Y-yoffs, this.ang + this.frameOffset);
  }


});


