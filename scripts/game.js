function Game(sCanvasName){
	var self = this;
	var oCanv = document.getElementById(sCanvasName);
	var oCtx = oCanv.getContext('2d');

	var iDisplayWidth = oCtx.width;
	var iDisplayHeight = oCtx.height;

  /*
  //create back canvas - not sure if nescesary
  var oBackCanv = document.createElement('canvas');
	oBackCanv.width = oCanv.width;
	oBackCanv.height = oCanv.height;
	oBCtx = oBackCanv.getContext('2d');
*/
	var oMap;

	this.setMap = function(oNewMap){
		oMap = oNewMap;
	};

  var iVal = 0;

	this.timer = setInterval(function(){self.drawFrame(); }, 1000 / Global.Fps);

//test

var i = 0;

	this.drawFrame=function(){
		if (ResMan.isReady()){
      if (oMap !== undefined){
        oMap.draw(oCtx, 0,0);
        //oFrame.drawRot(oCtx, 50,50,i);
      }

			i+=0.01;
			//draw stuff
			this.endFrame();
		}

	};



	this.endFrame = function(){
	//copy back canvas to front
  //	oFctx.drawImage(oBCtx,0,0);
    FrameCount.addFrame();
  };

}