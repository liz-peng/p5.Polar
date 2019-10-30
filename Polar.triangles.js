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

Polar.multiTriangle = function(_num, _radius, _distance) {
  const _angle = 360/_num;
  for(let i=0; i<_num; i++) {
    Polar.triangle(i*_angle, _radius, _distance);
  }
}