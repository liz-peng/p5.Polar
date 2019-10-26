Polar.line = function(_angle, _radius) {
  let _radians = radians(_angle);
  rotate(radians(_angle));
  line(0, _radius, 0, -_radius);
}