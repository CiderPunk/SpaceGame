var Map = PClass.create({
	oGraphic: null,
	oGCtx: null,
	oCCtx: null,
	aEnts: [],

	init: function(sName, sGraphic, sCollisionMap){
		oGraphic = document.createElement('canvas');
		var oColMap = document.createElement('canvas');
		ResMan.loadImage(sName = '_map', sGraphic, function(img){
			oGraphic.width = img.width;
			oGraphic.height = img.height;
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

	draw: function(oCtx, x,y){
    //draw background
		oCtx.drawImage(oGraphic,x,y,640,480,0,0,640,480);
    
    for (var iEnt in this.aEnts){
       this.aEnts[iEnt].draw(oCtx,x,y); 
    }

	},

  addEnt: function(oEnt){
    this.aEnts.push(oEnt);
  }


});