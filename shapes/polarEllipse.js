const polar = {
  center: { 
    x: 0, 
    y: 0 
  },
  setCenter(x, y) {
    this.center.x = x;
    this.center.y = y;
  }
};

p5.prototype.polarEllipse = function(_angle, _radiusW, _radiusH, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*_distance);
  ellipse(0, 0, _radiusW*2, _radiusH*2);
}

p5.prototype.polarEllipses = function(_num, _radiusW, _radiusH, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radiusW, _radiusH, _distance);
      polarEllipse(_result[0]*_result[1], _result[2], _result[3], _result[4]);
    }
    else polarEllipse(i*_angle, _radiusW, _radiusH, _distance);
  }
}