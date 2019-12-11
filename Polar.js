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

Polar.triangle = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle)); 
  triangle(
    sin(0), cos(0)*-_radius,
    sin(TWO_PI*1/3)*_radius, cos(TWO_PI*1/3)*-_radius,
    sin(TWO_PI*2/3)*_radius, cos(TWO_PI*2/3)*-_radius
  );
}

Polar.triangles = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      Polar.triangle(_result[0]*_result[1], _result[2], _result[3]);
    }
    else Polar.triangle(i*_angle, _radius, _distance);
  }
}

Polar.ellipse = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*_distance);
  ellipse(0, 0, _radius*2);
}

Polar.ellipses = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      Polar.ellipse(_result[0]*_result[1], _result[2], _result[3]);
    }
    else Polar.ellipse(i*_angle, _radius, _distance);
  }
}

Polar.line = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  line(0, _radius, 0, -_radius);
}

Polar.lines = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      Polar.line(_result[0]*_result[1], _result[2], _result[3]);
    }
    else Polar.line(i*_angle, _radius, _distance);
  }
}

Polar.square = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*_distance);
  rotate(radians(_angle));
  square(-_radius, -_radius, _radius*2);
}

Polar.squares = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      Polar.square(_result[0]*_result[1], _result[2], _result[3]);
    }
    else Polar.square(i*_angle, _radius, _distance);
  }
}

Polar.pentagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle)+60);
  beginShape();
  for(let i=0; i<5; i++) {
    vertex(cos(TWO_PI*i/5)*_radius, sin(TWO_PI*i/5)*_radius);
  }
  endShape(CLOSE);
}

Polar.pentagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      Polar.pentagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else Polar.pentagon(i*_angle, _radius, _distance);
  }
}

Polar.hexagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  beginShape();
  for(let i=0; i<6; i++) {
    vertex(cos(TWO_PI*i/6)*_radius, sin(TWO_PI*i/6)*_radius);
  }
  endShape(CLOSE);
}

Polar.hexagons = function(_num, _radius, _distance, callback) {
  const _angle = 180/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      Polar.hexagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else Polar.hexagon(i*_angle, _radius, _distance);
  }
}

Polar.heptagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle)+11);
  beginShape();
  for(let i=0; i<7; i++) {
    vertex(cos(TWO_PI*i/7)*_radius, sin(TWO_PI*i/7)*_radius);
  }
  endShape(CLOSE);
}

Polar.heptagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      Polar.heptagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else Polar.heptagon(i*_angle, _radius, _distance);
  }
}

Polar.octagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle));
  beginShape();
  for(let i=0; i<8; i++) {
    vertex(cos(TWO_PI*i/8)*_radius, sin(TWO_PI*i/8)*_radius);
  }
  endShape(CLOSE);
}

Polar.octagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      Polar.octagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else Polar.octagon(i*_angle, _radius, _distance);
  }
}

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