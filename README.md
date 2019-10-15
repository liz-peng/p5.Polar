# p5.polar
**Development still in progress**

A polar coordinate system library for p5.js

## Example
- Regular Traingle

``` JavaScript
function draw() {
  num = 1; // number of traingles
  radius = 100; // radius of polar system
  distance = 0; // the distance between traingles
  for(let i=0; i<num; i++) {
    resetMatrix();
    translate(width/2, height/2); // center of the canvas
    angle = (360/num)*i; // angle in the polar system
    Polar.regularTriangle(angle, radius, distance) // pass angle, radius and distance to polar system
  }
}
```
