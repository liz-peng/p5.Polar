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

Polar.polygon = function(_edge, _angle, _radius) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  rotate(radians(_angle));
  beginShape();
  for(let i=0; i<_edge; i++) {
    vertex(
      cos(TWO_PI*i/_edge)*_radius, sin(TWO_PI*i/_edge)*_radius
    );
  }
  endShape(CLOSE);
}