Polar = {
  center: { 
    x: 0, 
    y: 0 
  },
  setCenter(x, y) {
    this.center.x = x;
    this.center.y = y;
  }
};

Polar.octagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  beginShape();
  for(let i=0; i<8; i++) {
    vertex(cos(TWO_PI*i/8)*_radius, sin(TWO_PI*i/8)*_radius);
  }
  endShape(CLOSE);
}

Polar.octagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      Polar.octagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else Polar.octagon(i*_angle, _radius, _distance);
  }
}