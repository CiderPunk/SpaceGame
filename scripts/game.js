function Game(sCanvasName){
	var self = this;
	var oCanv = document.getElementById(sCanvasName);
	var oFctx = oCanv.getContext('2d');

	var iDisplayWidth = oFctx.width;
	var iDisplayHeight = oFctx.height;



var oBackCanv = document.createElement('canvas');
	oBackCanv.width = oCanv.width;
	oBackCanv.height = oCanv.height;
	oCtx = oBackCanv.getContext('2d');

	var oMap;

	this.setMap = function(oNewMap){
		oMap = oNewMap;
	}
 var iVal = 0;

	this.timer = setInterval(function(){self.frame(); }, 1000 / Global.Fps);

//test

var i = 0;

	this.frame=function(){


		if (ResMan.isReady()){
		
			
			oMap.draw(oFctx, 0,0);
			oFrame.drawRot(oFctx, 50,50,i);

			i+=0.01;
			//draw stuff
			this.flip();
		}

	}



	this.flip = function(){
		//oFctx.drawImage(oBackCanv,0,0);
		FrameCount.addFrame();
	}

}