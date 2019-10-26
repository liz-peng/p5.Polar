# p5.Polar
**Development still in progress**

A polar coordinate system library for p5.js

### Example
- Regular Triangle

``` JavaScript
function draw() {
    resetMatrix();
    translate(width/2, height/2); // center of the canvas
    Polar.regularTriangle(0, 100, 0); // pass angle, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/ZIl3qQ4.png "Polar.regularTriangle")

- Advanced Regular Triangle

``` JavaScript
function draw() {
  num = 2; // number of traingles
  rad = 100; // radius of polar system
  dis = 0; // the distance between triangles
  for(let i=0; i<num; i++) {
    resetMatrix();
    translate(width/2, height/2); // center of the canvas
    angle = (360/num)*i; // angle in the polar system
    Polar.regularTriangle(angle, rad, dis); // pass angle, radius and distance to polar system
  }
}
```
![alt text](https://i.imgur.com/YzoN9OM.png "Advanced Polar.regularTriangle")

- Ellipse

``` JavaScript
function draw() {
  resetMatrix();
  translate(width/2, height/2); // center of the canvas
  Polar.ellipse(0, 150, 0); // pass angle, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/0ot3y1B.png "Polar.ellipse")

- Advanced Ellipse

``` JavaScript
function draw() {
  num = 6; // number of circles
  rad = 100; // radius of polar system
  dis = 50; // the distance between triangles
  for(let i=0; i<num; i++) {
    resetMatrix();
    translate(width/2, height/2); // center of the canvas
    angle = (360/num)*i; // angle in the polar system
    Polar.ellipse(angle, rad, dis); // pass angle, radius and distance to polar system
  }
}
```
![alt text](https://i.imgur.com/g9yuIyV.png "Advanced Polar.ellipse")

- Line

``` JavaScript
function draw() {
  resetMatrix();
  translate(width/2, height/2); // center of the canvas
  Polar.line(0, 100); // pass angle and radius to polar system
}
```
![alt text](https://i.imgur.com/wWzEtwW.png "Polar.line")

- Advanced Line

``` JavaScript
function draw() {
  num = 3; // number of lines
  rad = 150; // radius of polar system
  for(let i=0; i<num; i++) {
    resetMatrix(); 
    translate(width/2, height/2); // center of the canvas
    angle = (360/num)*i; // angle in the polar system
    Polar.line(angle, rad); // pass angle and radius to polar system
  }
}
```
![alt text](https://i.imgur.com/VQfvhwN.png "Advanced Polar.line")

- Regular Hexagon

``` JavaScript
function draw() {
  resetMatrix();
  translate(width/2, height/2); // center of the canvas
  Polar.regularHexagon(0, 125, 0); // pass angle, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/qyohW6H.png "Polar.regularHexagon")

- Advanced Regular Hexagon

``` JavaScript
function draw() {
  num = 6; // number of hexagons
  rad = 50; // radius of polar system
  dis = 50; // the distance between hexagons
  for(let i=0; i<num; i++) {
    resetMatrix();
    translate(width/2, height/2); // center of the canvas
    angle = (360/num)*i; // angle in the polar system
    Polar.regularHexagon(angle, rad, dis); // pass angle, radius and distance to polar system
  }
}
```
![alt text](https://i.imgur.com/lgOgB4t.png "Advanced Polar.regularHexagon")
