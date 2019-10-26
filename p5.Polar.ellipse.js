Polar.ellipse = function(_angle, _radius, _distance) {
  let _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*_distance);
  ellipse(0, 0, _radius);
}