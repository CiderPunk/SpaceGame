var ResMan = new function(){
	
	var self = this;
	var iLoadCount = 0;
	this.aImageLib = {};
	this.aSoundLib = {};


	var	incLoadCount = function(){
		iLoadCount++;
		Debug.output("Inc load count, Load count: " + iLoadCount);
	}

	this.decLoadCount = function(){
		iLoadCount--;
		Debug.output("Load count: " +iLoadCount);
	}


	this.loadJSON = function(sUrl, func){		
		
		Debug.output('Loading JSON: ' + sUrl);

		incLoadCount();
		var oReq = new XMLHttpRequest();
		oReq.open( "GET", sUrl, true );
		oReq.UserFunc = func;
		oReq.onreadystatechange = function () {

			if (this.readyState == 4){
				Debug.output('Loaded JSON: ' + sUrl);
				//if (this.status == 200)
				{
					this.UserFunc(JSON.parse(this.responseText));
				}
		
				self.decLoadCount();
			}
		};
		oReq.send(null);
	} 

	this.loadImage = function(sName, sFile, fCallback){
		Debug.output('Loading Image: ' + sFile);
		var oImg = this.aImageLib[sName];
		if (oImg == undefined)
		{
			incLoadCount();
			oImg = new Image();
			oImg.src = sFile;
			oImg.callback = fCallback;
			oImg.onload = function(){
				Debug.output('Loaded Image: ' + sFile);

				if (this.callback != null){
					this.callback(this);
				}
				self.decLoadCount();
			}
			this.aImageLib[sName] = oImg;
		}
		else{
			fCallback(oImg);
		}
	}


	this.loadSound = function(sName, sFile){
		Debug.output('Loading Sound: ' + sFile);

		if (this.aSoundLib[sName] == undefined)
		{
			//incLoadCount();
			var oSound = new Audio(sFile);
			this.aSoundLib[sName] = oSound;
		}
	}

	this.parseData = function(oData){
		if (oData["images"] != undefined)
		{
			this.loadImages(oData["images"]);
		}
		if (oData["tiles"] != undefined)
		{
			TileMan.loadTiles(oData["tiles"]);
		}
		if (oData["maps"] != undefined)
		{
			MapMan.loadMaps(oData["maps"]);
		}


	}



	this.isReady = function(){
		return (iLoadCount == 0);
	}

	this.getSound = function(sName){
		return this.aSoundLib[sName];
	}

	this.getImage = function(sName){
		return this.aImageLib[sName];
	}

	this.clear = function(){
		this.aImageLib=[];
	}

};
