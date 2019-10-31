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

Polar.hexagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  beginShape();
  for(let i=0; i<6; i++) {
    vertex(cos(TWO_PI*i/6)*_radius, sin(TWO_PI*i/6)*_radius);
  }
  endShape(CLOSE);
}

Polar.hexagons = function(_num, _radius, _distance) {
  const _angle = 180/_num;
  for(let i=0; i<_num; i++) {
    Polar.hexagon(i*_angle, _radius, _distance);
  }
}