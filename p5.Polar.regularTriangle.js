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