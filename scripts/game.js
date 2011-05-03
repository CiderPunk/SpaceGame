function Game(sCanvasName){
	var self = this;
	var oCanv = document.getElementById(sCanvasName);
	var oCtx = oCanv.getContext('2d');

	var iDisplayWidth = oCtx.width;
	var iDisplayHeight = oCtx.height;
	var oMap;

	this.setMap = function(oNewMap){
		oMap = oNewMap;
	};

  var iVal = 0;

	this.timer = setInterval(function(){self.drawFrame(); }, 1000 / Global.Fps);


var i = 0;

	this.drawFrame=function(){
		if (ResMan.isReady()){
      if (oMap !== undefined){
        oMap.update();
        oMap.draw(oCtx);
      }

			i+=0.01;
      FrameCount.addFrame();
		}

	};



}