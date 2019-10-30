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

Polar.line = function(_angle, _radius) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  rotate(radians(_angle));
  line(0, _radius, 0, -_radius);
}


Polar.lines = function(_num, _radius) {
  const _angle = 360/_num;
  for(let i=0; i<_num; i++) {
    Polar.line(i*_angle, _radius);
  }
}