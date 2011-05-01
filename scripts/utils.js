
var Debug = new function(){

	var eOutput = null;
  
  //initialize debug function with containing div name..
	this.init = function(sElName){
		eOutput = document.getElementById("debug");
	};
  
  //output debug message
	this.output = function(sMessage){
		if (eOutput)
		{
			eOutput.innerHTML += '<br/>' + sMessage;
		}
	};
};


var FrameCount = new function(){
	var self = this;
	var eOutput = null;
	var timer = setInterval(function(){ self.update(); }, 1000);
	var iCount = 0;
	var dTime = new Date();
	var bEnabled = false;


	this.init = function(sElName){
		eOutput = document.getElementById(sElName);
		bEnabled = true;
	};

	this.update= function(){

		if (bEnabled)
		{
			var dNewTime = new Date();
			eOutput.innerHTML = iCount.toString();
			iCount = 0;
		}

	};

	this.addFrame = function(){
		iCount++;
	};
};
