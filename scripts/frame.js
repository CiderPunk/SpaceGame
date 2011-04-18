
var Frame = PClass.create({

	init: function(aData){
		this.img = ResMan.getImage(aData[0]);
		this.xp = aData[1];
		this.yp = aData[2];
		this.w = aData[3];
		this.h = aData[4];
		this.xoffs =  (aData[5] == undefined ? 0 : aData[5]);
		this.yoffs = (aData[6] == undefined ? 0 : aData[6]);
		this.delay = (aData[7] == undefined ? 0 : aData[7]);
		this.nextFrm = null;
	},
	/*
	init: function(image,xpos,ypos,width,height,delay,xoffs,yoffs){
		var img = image;
		var xp = xpos;
		var yp = ypos;
		var w = width;
		var h = height;
		var delay = (delay == undefined ? 0 : delay);
		var xoffs =  (xoffs == undefined ? 0 : xoffs);
		var yoffs = (yoffs == undefined ? 0 : yoffs);
		var nextFrm = null;
	},*/

	draw: function(ctx,x,y){
		ctx.drawImage(this.img,this.xp,this.yp,this.w,this.h,x-this.xoffs,y-this.yoffs,this.w,this.h); 
	},

		drawRot: function(ctx,x,y,ang){
			ctx.save();
			ctx.translate(x,y);
			ctx.rotate(ang);
			
			this.draw(ctx,0,0);
			ctx.restore();

		},

	duration: function(){
		return this.delay;
	},


	setNextFrame: function(frm){
		this.nextFrm	= frm;
	},

	getNextFrame: function(){
		return this.nextFrm;
	}

});