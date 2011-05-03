var InputMan = new function(){
  var oState = {};
  var oKeyConfig = {};
  var eOutput = null;
  
  
  
  
  var doKeyUp = function(e){
    var sFunc = oKeyConfig[e.keyCode];
    if (sFunc !== undefined){
      Debug.output("key up: "+ sFunc);
      oState[sFunc] = false;
    }  
  };
  
  var doKeyDown = function(e){
    var sFunc = oKeyConfig[e.keyCode];
    if (sFunc !== undefined){
      if (!oState[sFunc]){
        Debug.output("key down: "+ sFunc);
      }   
      oState[sFunc] = true;
    }
    if (eOutput !== null){
      eOutput.innerHTML = e.keyCode;
    }
  };
  
  window.addEventListener('keydown', doKeyDown, true);
  window.addEventListener('keyup', doKeyUp,true);

  this.setOutput = function(sId){
    eOutput = document.getElementById(sId);
  };


  this.setKey = function(iKeyCode, sFunc){
    oKeyConfig[iKeyCode] = sFunc;
  };
  
  this.clearKey = function(iKeyCode){
    oKeyConfig[iKeyCode] = undefined; 
  };
  
  this.state = function(sFunc){
    return oState[sFunc];  
  };

};