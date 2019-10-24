# p5.polar
**Development still in progress**

A polar coordinate system library for p5.js

### Example
- Regular Traingle

``` JavaScript
function draw() {
    resetMatrix();
    translate(width/2, height/2); // center of the canvas
    Polar.regularTriangle(0, 100, 0); // pass angle, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/ZIl3qQ4.png "Polar.regularTriangle")

- Advanced Regular Traingle

``` JavaScript
function draw() {
  num = 2; // number of traingles
  rad = 100; // radius of polar system
  dis = 0; // the distance between traingles
  for(let i=0; i<num; i++) {
    resetMatrix();
    translate(width/2, height/2); // center of the canvas
    angle = (360/num)*i; // angle in the polar system
    Polar.regularTriangle(angle, rad, dis); // pass angle, radius and distance to polar system
  }
}
```
![alt text](https://i.imgur.com/YzoN9OM.png "Advanced Polar.regularTriangle")
