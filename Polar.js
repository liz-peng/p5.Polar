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

Polar.triangle = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle)); 
  triangle(
    sin(0), cos(0)*-_radius,
    sin(TWO_PI*1/3)*_radius, cos(TWO_PI*1/3)*-_radius,
    sin(TWO_PI*2/3)*_radius, cos(TWO_PI*2/3)*-_radius
  );
}

Polar.triangles = function(_num, _radius, _distance) {
  const _angle = 360/_num;
  for(let i=0; i<_num; i++) {
    Polar.triangle(i*_angle, _radius, _distance);
  }
}

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