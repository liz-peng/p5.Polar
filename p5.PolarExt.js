// Extensions to the p5.Polar library
// Contributed by https://github.com/iuli4n

// Shift a certain distance in the X axis, and multiple the scale by _scale 
p5.prototype.shiftDistScale = function(_distance, _scale) {
  this.scale(_scale);
  this.translate(0, _distance);
}

// This allows shapes to be drawn linearly farther from a point
// _totaldistance = how much to travel; _num = how many to draw; drawCallbackLinear = function(index, _totaldistance); linear = not used right now
p5.prototype.linearDrawCallback = function(_num, _totaldistance, drawCallbackLinear, linear=false) {
  for(let i=1; i<=_num; i++) {
	    d = 1 - (0.5 * round(pow(i-1, 2)))
	    d = d*_totaldistance;
	
	    this.push();
      this.shiftDistScale(d, pow(i-1,2))
	    drawCallbackLinear(i, _totaldistance);
      this.pop();  
  }
}
