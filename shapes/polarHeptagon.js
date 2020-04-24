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

p5.prototype.polarHeptagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle)+11);
  beginShape();
  for(let i=1; i<=7; i++) {
    vertex(cos(TWO_PI*i/7)*_radius, sin(TWO_PI*i/7)*_radius);
  }
  endShape(CLOSE);
}

p5.prototype.polarHeptagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      polarHeptagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else polarHeptagon(i*_angle, _radius, _distance);
  }
}