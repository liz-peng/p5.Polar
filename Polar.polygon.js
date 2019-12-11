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

Polar.polygon = function(_num, _angle, _radius) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  rotate(radians(_angle));
  beginShape();
  for(let i=0; i<_num; i++) {
    vertex(
      cos(TWO_PI*i/_num)*_radius, sin(TWO_PI*i/_num)*_radius
    );
  }
  endShape(CLOSE);
}