
var Debug = new  function Debug(){

	var eOutput = null;

	this.init = function(sElName){
		eOutput = document.getElementById("debug");
	}

	this.output = function(sMessage){
		if (eOutput)
		{
			eOutput.innerHTML += '<br/>' + sMessage;
		}
	}
}


var FrameCount = new function FrameCount(){
	var self = this;
	var eOutput = null;
	var timer = setInterval(function(){ self.update() }, 1000);
	var iCount = 0;
	var dTime = new Date();
	var bEnabled = false;


	this.init = function(sElName){
		eOutput = document.getElementById(sElName);
		bEnabled = true;
	}

	this.update= function(){

		if (bEnabled)
		{
			var dNewTime = new Date();
			eOutput.innerHTML = iCount.toString();
			iCount = 0;
		}

	}

	this.addFrame = function(){
		iCount++;
	}


}

