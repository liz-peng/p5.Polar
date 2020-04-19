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

// Triangle
p5.prototype.polarTriangle = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle)); 
  triangle(
    sin(0), cos(0)*-_radius,
    sin(TWO_PI*1/3)*_radius, cos(TWO_PI*1/3)*-_radius,
    sin(TWO_PI*2/3)*_radius, cos(TWO_PI*2/3)*-_radius
  );
}

p5.prototype.polarTriangles = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      polarTriangle(_result[0]*_result[1], _result[2], _result[3]);
    }
    else polarTriangle(i*_angle, _radius, _distance);
  }
}

// Ellipse
p5.prototype.polarEllipse = function(_angle, _radiusW, _radiusH, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*_distance);
  ellipse(0, 0, _radiusW*2, _radiusH*2);
}

p5.prototype.polarEllipses = function(_num, _radiusW, _radiusH, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radiusW, _radiusH, _distance);
      polarEllipse(_result[0]*_result[1], _result[2], _result[3], _result[4]);
    }
    else polarEllipse(i*_angle, _radiusW, _radiusH, _distance);
  }
}

// Line
p5.prototype.polarLine = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  line(0, _radius, 0, -_radius);
}

p5.prototype.polarLines = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      polarLine(_result[0]*_result[1], _result[2], _result[3]);
    }
    else polarLine(i*_angle, _radius, _distance);
  }
}

// Square
p5.prototype.polarSquare = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*_distance);
  rotate(radians(_angle));
  square(-_radius, -_radius, _radius*2);
}

p5.prototype.polarSquares = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      polarSquare(_result[0]*_result[1], _result[2], _result[3]);
    }
    else polarSquare(i*_angle, _radius, _distance);
  }
}

// Pentagon
p5.prototype.polarPentagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle)+60);
  beginShape();
  for(let i=1; i<=5; i++) {
    vertex(cos(TWO_PI*i/5)*_radius, sin(TWO_PI*i/5)*_radius);
  }
  endShape(CLOSE);
}

p5.prototype.polarPentagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      polarPentagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else polarPentagon(i*_angle, _radius, _distance);
  }
}

// Hexagon
p5.prototype.polarHexagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  beginShape();
  for(let i=1; i<=6; i++) {
    vertex(cos(TWO_PI*i/6)*_radius, sin(TWO_PI*i/6)*_radius);
  }
  endShape(CLOSE);
}

p5.prototype.polarHexagons = function(_num, _radius, _distance, callback) {
  const _angle = 180/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      polarHexagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else polarHexagon(i*_angle, _radius, _distance);
  }
}

// Heptagon
p5.prototype.polarHeptagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle)+11);
  beginShape();
  for(let i=1; i<=7; i++) {
    vertex(cos(TWO_PI*i/7)*_radius, sin(TWO_PI*i/7)*_radius);
  }
  endShape(CLOSE);
}

p5.prototype.polarHeptagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      polarHeptagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else polarHeptagon(i*_angle, _radius, _distance);
  }
}

// Octagon
p5.prototype.polarOctagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  beginShape();
  for(let i=1; i<=8; i++) {
    vertex(cos(TWO_PI*i/8)*_radius, sin(TWO_PI*i/8)*_radius);
  }
  endShape(CLOSE);
}

p5.prototype.polarOctagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      polarOctagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else polarOctagon(i*_angle, _radius, _distance);
  }
}

// Polygon
p5.prototype.polarPolygon = function(_edge, _angle, _radius) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  rotate(radians(_angle));
  beginShape();
  for(let i=1; i<=_edge; i++) {
    vertex(cos(TWO_PI*i/_edge)*_radius, sin(TWO_PI*i/_edge)*_radius);
  }
  endShape(CLOSE);
}