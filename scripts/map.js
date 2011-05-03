var Map = PClass.create({
  
  Gravity: new Coord(0,0.05),
  Friction: 1,
  oCentre: new Coord(0,0),
  
  Width:0,
  Height:0,
  
  oFollowEnt: null,
	oGraphic: null,
	oGCtx: null,
	oCCtx: null,
	aEnts: [],

	init: function(sName, sGraphic, sCollisionMap){
    var self = this;
		oGraphic = document.createElement('canvas');
		var oColMap = document.createElement('canvas');
		ResMan.loadImage(sName = '_map', sGraphic, function(img){
			self.Width = oGraphic.width = img.width;
			self.Height = oGraphic.height = img.height;
			oGCtx = oGraphic.getContext('2d');
			oGCtx.drawImage(img,0,0);
			Debug.output('Map graphic loaded');
		});
		
		ResMan.loadImage(sName = '_col', sCollisionMap, function(img){
			oColMap.width = img.width;
			oColMap.height = img.height;
			oCCtx = oColMap.getContext('2d');
			oCCtx.drawImage(img,0,0);
			Debug.output('Colision map loaded');
		});
	},

  update: function(){
    for (var iEnt in this.aEnts){
       this.aEnts[iEnt].update(this); 
    }
  },

	draw: function(oCtx){

    var oFocus;
    if (this.oFollowEnt !== null){
      oFocus = this.oFollowEnt.Pos; 
    }
    else{
      oFocus = this.oCentre; 
    }
    
    var iLeft = 0;
    var iWidth =  oGraphic.width;
    if (oCtx.canvas.width < oGraphic.width){
      iLeft = oFocus.X - (0.5 * oCtx.canvas.width);
      iWidth = oCtx.canvas.width;
      if (iLeft  < 0) { 
        iLeft = 0;
      }
      else if(iLeft + oCtx.canvas.width > oGraphic.width){
        iLeft = oGraphic.width - oCtx.canvas.width;
      }
    }
    var iTop = 0;
    var iHeight= oGraphic.height;
    if (oCtx.canvas.height < oGraphic.height){
      iTop = oFocus.Y - (0.5 * oCtx.canvas.height);
      iHeight = oCtx.canvas.height;
      if (iTop  < 0) { 
        iTop = 0;
      }
      else if(iTop + oCtx.canvas.height > oGraphic.height){
        iTop = oGraphic.height - oCtx.canvas.height;
      }
    }
    
    
    oCtx.drawImage(oGraphic,iLeft,iTop,iWidth,iHeight,0,0,iWidth,iHeight);
    
    //draw background

    for (var iEnt in this.aEnts){
       this.aEnts[iEnt].draw(oCtx,iLeft,iTop); 
    }
	},
  
  getGravity: function(oCoord){
    return this.Gravity;
  },
  
  getFriction: function(oCoord){
    return this.Friction; 
  },

  addEnt: function(oEnt){
    this.aEnts.push(oEnt);
  },

  setFollow:function(oEnt){
    this.oFollowEnt = oEnt;    
  } 

});