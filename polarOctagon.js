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

p5.prototype.polarOctagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  beginShape();
  for(let i=1; i<=8; i++) {
    vertex(cos(TWO_PI*i/8)*_radius, sin(TWO_PI*i/8)*_radius);
  }
  endShape(CLOSE);
}

p5.prototype.polarOctagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      polarOctagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else polarOctagon(i*_angle, _radius, _distance);
  }
}