Polar.multiTriangle = function(_num, _radius, _distance) {
  const _angle = 360/_num;
  for(let i=0; i<_num; i++) {
    Polar.triangle(i*_angle, _radius, _distance);
  }
}