//       ____   ____       _            
//  _ __| ___| |  _ \ ___ | | __ _ _ __ 
// | '_ \___ \ | |_) / _ \| |/ _` | '__|
// | |_) |__) ||  __/ (_) | | (_| | |   
// | .__/____(_)_|   \___/|_|\__,_|_|   
// |_|   
//
// https://github.com/liz-peng/p5.Polar
// Created by Liz Peng
// Version 2.1 Aug 13th 2020             

// let each sketches have their center point
p5.prototype.setCenter = function(x, y) {
  if(this.center === undefined) {
   this.center = { x, y }
  }
  else {
    this.translate(this.center.x = x, this.center.y = y);
  }
}

// Triangle
p5.prototype.polarTriangle = function(_angle, _radius, _distance) {
  this.push();
  const _radians = this.radians(_angle);
  this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
  this.rotate(this.radians(_angle)); 
  this.triangle(
    this.sin(0), this.cos(0)*-_radius,
    this.sin(this.TWO_PI*1/3)*_radius, this.cos(this.TWO_PI*1/3)*-_radius,
    this.sin(this.TWO_PI*2/3)*_radius, this.cos(this.TWO_PI*2/3)*-_radius
  );
  this.pop();
}

p5.prototype.polarTriangles = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      this.polarTriangle(_result[0]*_result[1], _result[2], _result[3]);
    }
    else this.polarTriangle(i*_angle, _radius, _distance);
  }
}

// Ellipse
p5.prototype.polarEllipse = function(_angle, _radiusW, _radiusH, _distance) {
  this.push();
  const _radians = this.radians(_angle);
  this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
  this.rotate(this.radians(_angle));
  this.ellipse(0, 0, _radiusW*2, _radiusH*2);
  this.pop();
}

p5.prototype.polarEllipses = function(_num, _radiusW, _radiusH, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radiusW, _radiusH, _distance);
      this.polarEllipse(_result[0]*_result[1], _result[2], _result[3], _result[4]);
    }
    else this.polarEllipse(i*_angle, _radiusW, _radiusH, _distance);
  }
}

// Line
p5.prototype.polarLine = function(_angle, _radius, _distance) {
  this.push();
  const _radians = this.radians(_angle);
  this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
  this.rotate(this.radians(_angle));
  this.line(0, _radius, 0, -_radius);
  this.pop();
}

p5.prototype.polarLines = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      this.polarLine(_result[0]*_result[1], _result[2], _result[3]);
    }
    else this.polarLine(i*_angle, _radius, _distance);
  }
}

// Square
p5.prototype.polarSquare = function(_angle, _radius, _distance) {
  this.push();
  const _radians = this.radians(_angle);
  this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
  this.rotate(this.radians(_angle));
  this.square(-_radius, -_radius, _radius*2);
  this.pop();
}

p5.prototype.polarSquares = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      this.polarSquare(_result[0]*_result[1], _result[2], _result[3]);
    }
    else this.polarSquare(i*_angle, _radius, _distance);
  }
}

// Pentagon
p5.prototype.polarPentagon = function(_angle, _radius, _distance) {
  this.push();
  const _radians = this.radians(_angle);
  this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
  this.rotate(this.radians(_angle)+60);
  this.beginShape();
  for(let i=1; i<=5; i++) {
    this.vertex(this.cos(this.TWO_PI*i/5)*_radius, this.sin(this.TWO_PI*i/5)*_radius);
  }
  this.endShape(this.CLOSE);
  this.pop();
}

p5.prototype.polarPentagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      this.polarPentagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else this.polarPentagon(i*_angle, _radius, _distance);
  }
}

// Hexagon
p5.prototype.polarHexagon = function(_angle, _radius, _distance) {
  this.push();
  const _radians = this.radians(_angle);
  this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
  this.rotate(this.radians(_angle));
  this.beginShape();
    for(let i=0; i<6; i++) {
      this.vertex(
        this.cos(this.TWO_PI*i/6)*_radius, this.sin(this.TWO_PI*i/6)*_radius
      );
    }
  this.endShape(this.CLOSE);
  this.pop();
}

p5.prototype.polarHexagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      this.polarHexagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else this.polarHexagon(i*_angle, _radius, _distance);
  }
}

// Heptagon
p5.prototype.polarHeptagon = function(_angle, _radius, _distance) {
  this.push();
  const _radians = this.radians(_angle);
  this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
  this.rotate(this.radians(_angle)+11);
  this.beginShape();
  for(let i=1; i<=7; i++) {
    this.vertex(this.cos(this.TWO_PI*i/7)*_radius, this.sin(this.TWO_PI*i/7)*_radius);
  }
  this.endShape(this.CLOSE);
  this.pop();
}

p5.prototype.polarHeptagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      this.polarHeptagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else this.polarHeptagon(i*_angle, _radius, _distance);
  }
}

// Octagon
p5.prototype.polarOctagon = function(_angle, _radius, _distance) {
  this.push();
  const _radians = this.radians(_angle);
  this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
  this.rotate(this.radians(_angle));
  this.beginShape();
  for(let i=1; i<=8; i++) {
    this.vertex(this.cos(this.TWO_PI*i/8)*_radius, this.sin(this.TWO_PI*i/8)*_radius);
  }
  this.endShape(this.CLOSE);
  this.pop();
}

p5.prototype.polarOctagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      this.polarOctagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else this.polarOctagon(i*_angle, _radius, _distance);
  }
}

// Polygon
p5.prototype.polarPolygon = function(_edge, _angle, _radius, _distance) {
  this.push();
  const _radians = this.radians(_angle);
  this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
  this.rotate(this.radians(_angle));
  this.beginShape();
  for(let i=1; i<=_edge; i++) {
    this.vertex(this.cos(this.TWO_PI*i/_edge)*_radius, this.sin(this.TWO_PI*i/_edge)*_radius);
  }
  this.endShape(this.CLOSE);
  this.pop();
}

p5.prototype.polarPolygons = function(_num, _edge, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _edge, _radius, _distance);
      this.polarPolygon(_result[2], _result[0]*_result[1], _result[3], _result[4]);
    }
    else this.polarPolygon(_edge, i*_angle, _radius, _distance);
  }
}
