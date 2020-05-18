const polar = {
  center: { 
    x: 0, 
    y: 0 
  },
  setCenter(x, y) {
    this.center.x = x;
    this.center.y = y;
  }
};

p5.prototype.polarPolygon = function(_edge, _angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  beginShape();
  for(let i=1; i<=_edge; i++) {
    vertex(cos(TWO_PI*i/_edge)*_radius, sin(TWO_PI*i/_edge)*_radius);
  }
  endShape(CLOSE);
}

p5.prototype.polarPolygons = function(_num, _edge, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _edge, _radius, _distance);
      polarPolygon(_result[2], _result[0]*_result[1], _result[3], _result[4]);
    }
    else polarPolygon(_edge, i*_angle, _radius, _distance);
  }
}