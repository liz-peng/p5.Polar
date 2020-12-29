# p5.Polar
p5.Polar is a JavaScript library that extend [p5.js](https://p5js.org/) standard drawing functions with versions using polar coordinates. The library converts polar coordinate to cartesian coordinate, and abstracts the mathematics required for making many types of geometric patterns.

![alt text](https://imgur.com/8V2uuzd.png "p5.Polar example") 

![alt text](https://i.imgur.com/vsvbhoM.png "p5.Polar example") 

![alt text](https://i.imgur.com/ww5tuWK.png "p5.Polar example") 

![alt text](https://imgur.com/3CPWaaS.png "why p5.Polar") 

## Release Note (08/13/2020)
What's new in version 2.1 ?
- Fix drawing ellipse doesn't radiate outward from center point.
- Fix bug to support drawing animation (scroll down to see the examples about how to draw animation).
- Special thanks to the project's advisor [@charlieroberts](https://github.com/charlieroberts) for all the tips and resources!

## CDN
[p5.Polar.js](https://cdn.jsdelivr.net/gh/liz-peng/p5.Polar/p5.Polar.js)

[p5.Polar.min.js](https://cdn.jsdelivr.net/gh/liz-peng/p5.Polar/p5.Polar.min.js)

## How to add library to your p5.js sketch
- [Official guide about how to use a library](https://p5js.org/libraries/) 

- Download _p5.Polar.js_ or the minified version _p5.Polar.min.js_ to your local environment. Link the file to your HTML.

- Link [p5.Polar.js](https://cdn.jsdelivr.net/gh/liz-peng/p5.Polar/p5.Polar.js) or the minified version, [p5.Polar.min.js](https://cdn.jsdelivr.net/gh/liz-peng/p5.Polar/p5.Polar.min.js) to your HTML.


- If you are using [p5.js web editor](https://editor.p5js.org/), upload _p5.Polar.js_ or _p5.Polar.min.js_ to your sketch files, and then Link the file to index.html.

## Playground
Try out the library and create shapes and patterns at the p5.Polar [Playground](https://liz-peng.github.io/p5.Polar/playground.html) (Note: callback function is not available and will be supported soon).

## Examples & Documentation
### Basic Usage
#### Let each sketches have their center point
- setCenter( x, y )

#### [Single drawing function](#singleFunction)
- polarLine( angle, radius, [distance] )
- [polarTriangle( angle, radius, [distance] )](#polarTriangle)
- polarSquare( angle, radius, [distance] ) 
- polarPentagon( angle, radius, [distance] )
- polarHexagon( angle, radius, [distance] ) 
- polarHeptagon( angle, radius, [distance] )
- polarOctagon( angle, radius, [distance] )
- [polarEllipse( angle, widthRadius, heightRadius, [distance] )](#polarEllipse)
- [polarPolygon( number, angle, radius, [distance] )](#polarPolygon)

#### [Multiple drawing function](#multiFunction)
- polarLines( number, radius, distance, [callback] )
- [polarTriangles( number, radius, distance, [callback] )](#polarTriangles)
- polarSquares( number, radius, distance, [callback] ) 
- [polarPentagons( number, radius, distance, [callback] )](#polarPentagons)
- polarHexagons( number, radius, distance, [callback] ) 
- polarHeptagons( number, radius, distance, [callback] )
- polarOctogons( number, radius, distance, [callback] )
- [polarEllipses( number, widthRadius, heightRadius, distance, [callback] )](#polarEllipses)
- [polarPolygons( number, number of edges, radius, distance, [callback] )](#polarPolygons)

#### [Callback function](#callback)
The value of each member of args: 
- args[0] = number of shapes (from 1 to N)
- args[1] = angle 
- args[2] = radius 
- args[3] = distance

The value of each member of args when drawing with polarEllipses() function: 
- args[0] = number of ellipses (from 1 to N)
- args[1] = angle 
- args[2] = width of radius 
- args[3] = height of radius 
- args[4] = distance

#### [Animation examples](#animation)

#### [Pattern examples](#pattern)

### Examples of Single Drawing Function <a name="singleFunction"></a>
#### polarTriangle() <a name="polarTriangle"></a>
###### Draw a single triangle with radius of 100 at the center of polar system
<img src="https://imgur.com/1oqHVUv.png" width="50%" height="50%" />

``` JavaScript
function draw() { 
    setCenter(width/2, height/2);
    polarTriangle(0, 100, 0); // works the same as polarTriangle(0, 100);
}
```
###### Move 50 from the center point
<img src="https://imgur.com/WCc6eEg.png" width="50%" height="50%" />

``` JavaScript
function draw() { 
    setCenter(width/2, height/2);
    polarTriangle(0, 100, 50);
}
```
###### Rotate the triangle for 30 degree
<img src="https://imgur.com/nKhQ3jl.png" width="50%" height="50%" />

``` JavaScript
function draw() { 
    setCenter(width/2, height/2);
    polarTriangle(30, 100, 50);
}
```

#### polarEllipse() <a name="polarEllipse"></a>
###### Draw a single ellipse with width of 50, and height of 100 from center of polar system
<img src="https://imgur.com/hgLKp2q.png" width="50%" height="50%" />

``` JavaScript
function draw() { 
    setCenter(width/2, height/2);
    polarEllipse(0, 50, 100, 0); // works the same as polarEllipse(0, 50, 100)
}
```

#### polarPolygon() <a name="polarPolygon"></a>
###### Draw a twelve-sided shape from center of polar system
<img src="https://imgur.com/4XyhWyv.png" width="25%" height="25%" />

``` JavaScript
function draw() { 
    setCenter(width/2, height/2);
    polarPolygon(12, 0, 100);
}
```

### Examples of Multiple Drawing Function <a name="multiFunction"></a>
#### polarTriangles() <a name="polarTriangles"></a>
###### Draw 6 triangles with radius 50, and move 100 from the center point
<img src="https://imgur.com/KO3oLM5.png" width="50%" height="50%" />

``` JavaScript
function draw() { 
    setCenter(width/2, height/2);
    polarTriangles(6, 50, 100);
}
```

#### polarPentagons() <a name="polarPentagons"></a>
###### Draw 7 pentagons with radius 50, and move 100 from the center point
<img src="https://imgur.com/MDwWnbf.png" width="50%" height="50%" />

``` JavaScript
function draw() { 
    setCenter(width/2, height/2);
    polarPentagons(7, 50, 100);
}
```

#### polarEllipses() <a name="polarEllipses"></a>
###### Draw 6 ellipses with both width and height of 50, and move 100 from the center point
<img src="https://imgur.com/poEF2xK.png" width="50%" height="50%" />

``` JavaScript
function draw() { 
    setCenter(width/2, height/2);
    polarEllipses(6, 50, 50, 100);
}
```

#### callback function <a name="callback"></a>
###### Giving a gradient color and different sizes of ellipse by manipulating the first argument
<img src="https://imgur.com/pm4olf6.png" width="25%" height="25%" />

``` JavaScript
function draw() { 
    setCenter(width/2, height/2);
    polarEllipses(10, 0, 0, 100, function(...args) {
        fill(args[0]*40, args[0]*40, args[0]*40, 160);
        args[2] = args[0]*6;
        args[3] = args[0]*6;
        return args;     
    });
}
```

## Animation examples <a name="animation"></a>
#### Animation 1
###### Use sin() and frameCount() to make oscillation
![](https://i.imgur.com/e8pONwt.gif)

``` JavaScript
function draw() { 
  setCenter(width/2, height/2);
  stroke('#666');
  noFill();
  polarEllipses(30, 40+sin(frameCount/10)*20, 80, 80);
}
```

#### Animation 2
###### Drawing multiple animations with different center point. Remember to use resetMatrix() to replace the current matrix before setting new center
![](https://i.imgur.com/X108ADh.gif)

``` JavaScript
function draw() { 
  noFill();
  stroke('#666');
  
  setCenter(width/4, height/4);
  polarEllipses(20, 20+sin(frameCount/10)*10, 40, 40);
  
  // replace the current matrix before setting new center
  resetMatrix();
  setCenter(width/4+200, height/4);
  rotate(frameCount * 0.01); 
  polarEllipses(20, 20, 40, 40);
  
  resetMatrix();
  setCenter(width/4, height/4+200);
  rotate(frameCount * 0.01); 
  polarEllipses(20, 20, 40, 40);
  
  resetMatrix();
  setCenter(width/4+200, height/4+200);
  polarEllipses(20, 20+sin(frameCount/10)*10, 40, 40);
}
```

## Pattern examples <a name="pattern"></a>
#### Pattern 1
<img src="https://i.imgur.com/R6ktywg.png" width="25%" height="25%" />

``` JavaScript
function draw() {
  background(220);
  setCenter(width/2, height/2);
  
  // polarLines( number, radius, distance, [callback] )
  stroke('#000')
  strokeWeight(0.3);
  polarLines(3, 200, 0);
  
  noStroke();
  
  // polarHexagon( angle, radius, [distance] )
  fill(175, 170, 238);
  polarHexagon(30, 50, 0);
  
  // polarEllipse( angle, widthRadius, heightRadius, [distance] )
  fill(252, 248, 200);
  polarEllipses(8, 10, 10, 100);
  fill(238, 175, 170);
  polarEllipses(12, 40, 40, 200);
  fill(252, 248, 200, 120);
  polarEllipses(5, 80, 80, 160);
}
```

#### Pattern 2
<img src="https://i.imgur.com/Cg7wyAO.png" width="25%" height="25%" />

``` JavaScript
function draw() {
  background(220);
  setCenter(width/2, height/2);
  noFill();
  
  // polarEllipses( number, widthRadius, heightRadius, distance, [callback] )
  polarEllipses(50, 0, 0, 0, function(...args) {
    stroke(args[0]*10);
    fill(args[0]*5, args[0]*4, args[0]*3, 30);
      args[2] = args[0]*6;
      args[3] = args[0]*6;
      args[4] = args[0]*5;
      return args;
  });
}
```

#### Pattern 3
<img src="https://i.imgur.com/i37XO62.png" width="25%" height="25%" />

``` JavaScript
function draw() {
  background(220);
  setCenter(width/2, height/2);
  noStroke();
  
  // polarTriangle( angle, radius, [distance] )
  fill(175, 170, 238);
  polarTriangle(0, 100, 0);
  fill(238, 175, 170);
  polarTriangle(180, 100, 0);
  
   // polarPentagons( number, radius, distance, [callback] )
  fill(238, 175, 170, 80);
  polarPentagons(6, 150, 150);
  fill(175, 170, 238, 40);
  polarPentagons(8, 200, 200);
  
  // polarEllipses( number, widthRadius, heightRadius, distance, [callback] )
  fill(238, 175, 170);
  polarEllipses(3, 10, 5, 120);
  fill(175, 170, 238);
  polarEllipses(3, 5, 10, -120);
}
```

#### Pattern 4
<img src="https://i.imgur.com/fCPVJk0.png" width="25%" height="25%" />

``` JavaScript
function draw() {
  background(0);
  setCenter(width/2, height/2);
  
  // polarLines( number, radius, distance, [callback] )
  noFill();
  stroke('#ccc');
  strokeWeight(0.5);
  polarLines(8, 140, 0);
  polarLines(8, 60, 20);
  
  // polarEllipses( number, widthRadius, heightRadius, distance, [callback] )
  noStroke();
  fill(13, 146, 185, 110);
  polarEllipses(10, 50, 50, 70);
  fill(252, 248, 200, 120);
  polarEllipses(5, 36, 36, 32);
  fill(178, 216, 178, 120);
  polarEllipses(10, 30, 30, 70);
  polarEllipses(10, 30, 30, 120);
  fill(238, 175, 170);
  polarEllipses(12, 8, 8, 40);
  fill(252, 248, 200, 120);
  polarEllipses(5, 16, 16, 32);
  fill(13, 146, 185, 110);
  polarEllipses(14, 50, 50, 155);
  
  // polarHexagon( angle, radius, [distance] ) 
  noStroke();
  fill(175, 170, 238);
  polarHexagon(3, 10, 0);
  
  fill(238, 175, 170);
  // polarTriangles( number, radius, distance, [callback] )
  polarTriangles(4, 6, 60);
  polarTriangles(4, 8, 140);
  // polarSquares( number, radius, distance, [callback] )
  polarSquares(8, 2, 80);
  polarSquares(4, 4, 120);
}
```

#### Pattern 5
<img src="https://i.imgur.com/h9st51u.png" width="25%" height="25%" />

``` JavaScript
function draw() {
  background(0);
  setCenter(width/2, height/2);
  noFill()
  
  strokeWeight(1);
  
  stroke('#ff7300');
  // polarPolygon( number, angle, radius, [distance] )
  polarPolygon(10, 0, 50);
  // polarPentagons( number, radius, distance, [callback] )
  polarPentagons(6, 60, 60);
  
  // polarTriangles( number, radius, distance, [callback] )
  stroke('#64ff00');
  polarTriangles(8, 125, 150);
  
  strokeWeight(1);
  stroke('#fc49ab');
  polarTriangles(10, 150, 150);
}
```

#### Pattern 6 <a name="polarPolygons"></a>
<img src="https://i.imgur.com/xg7EcYQ.png" width="25%" height="25%" />

``` JavaScript
function draw() {
  background(220);
  setCenter(width/2, height/2);
  stroke('#000');
  
  // polarPolygons( number, number of edges, radius, distance, [callback] )
  fill(229,188,231,120);
  polarPolygons(16, 4, 40, 180);
  fill(32,178,170,120);
  polarPolygons(6, 4, 40, 150);
  fill(252, 248, 200, 120);
  polarPolygons(6, 4, 80, 100);
  fill(255, 255, 255, 120);
  polarPolygons(6, 4, 40, 100);
}
```
