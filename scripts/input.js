var InputMan = new function(){
  var oState = {};
  var oKeyConfig = {};
  
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
  };
  
  window.addEventListener('keydown', doKeyDown, true);
  window.addEventListener('keyup', doKeyUp,true);


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