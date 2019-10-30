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

Polar.ellipse = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*_distance);
  ellipse(0, 0, _radius);
}

Polar.ellipses = function(_num, _radius, _distance) {
  const _angle = 360/_num;
  for(let i=0; i<_num; i++) {
    Polar.ellipse(i*_angle, _radius, _distance);
  }
}