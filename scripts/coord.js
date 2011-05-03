function Coord(iX, iY){
  this.X = (iX !== undefined ? iX : 0);
  this.Y = (iY !== undefined ? iY : 0);
  
  this.add = function(oCoord){
    return new Coord(this.X + oCoord.X, this.Y + oCoord.Y);
  };
  
  this.sub = function(oCoord){
    return new Coord(this.X - oCoord.X, this.Y - oCoord.Y);
  };
  
  this.div = function(iVal){
    return new Coord(this.X / iVal, this.Y / iVal);
  };
  
 this.mply = function(iVal){
    return new Coord(this.X * iVal, this.Y * iVal);
  };
 
  this.mag = function(){
   return Math.sqrt((this.X * this.X) + (this.Y * this.Y));
  };
}  


Coord.fromAngle = function(ang, amp){
    return new Coord(Math.cos(ang) * amp, Math.sin(ang) * amp); 
};