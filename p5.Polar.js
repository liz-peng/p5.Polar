const Polar = {};

Polar.line = function(_angle, _radius) {
  let _radians = radians(_angle);
  rotate(radians(_angle));
  line(0, _radius, 0, -_radius);
}

Polar.ellipse = function(_angle, _radius, _distance) {
  let _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*_distance);
  ellipse(0, 0, _radius);
}

Polar.regularTriangle = function(_angle, _radius, _distance) {
  let _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  triangle(
    sin(0), cos(0)*-_radius,
    sin(TWO_PI*1/3)*_radius, cos(TWO_PI*1/3)*-_radius,
    sin(TWO_PI*2/3)*_radius, cos(TWO_PI*2/3)*-_radius
  );
}

Polar.regularHexagon = function(_angle, _radius, _distance) {
  let _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  beginShape();
  for(let i=1; i<=6; i++) {
    vertex(cos(TWO_PI*i/6)*_radius, sin(TWO_PI*i/6)*_radius);
  }
  endShape(CLOSE);
}