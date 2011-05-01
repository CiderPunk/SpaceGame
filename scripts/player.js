var Player = Entity.extend({
	ang:0,	
	frame:null,
  
	init:function(x,y){
		X=x;
    Y=y;    
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
	},
  
  draw: function(oCtx,xoffs,yoffs){
	  frame.drawRot(oCtx, X-xoffs, Y-yoffs, this.ang);
  }


});


