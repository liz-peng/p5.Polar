# p5.Polar
**Development still in progress**

A polar coordinate system library for p5.js https://p5js.org/

![alt text](https://i.imgur.com/693CMSV.png "Polar.ellipses example") ![alt text](https://i.imgur.com/ReL7Ri3.png "Polar.lines example")

### Example
- Regular Triangle

``` JavaScript
function draw() {
    Polar.triangle(0, 100, 0); // pass angle, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/ZIl3qQ4.png "Polar.regularTriangle")

- Multiple Regular Triangle

``` JavaScript
function draw() {
   Polar.triangles(2, 100, 0); // pass number of triangles, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/YzoN9OM.png "Advanced Polar.regularTriangle")

- Ellipse

``` JavaScript
function draw() {
  Polar.ellipse(0, 150, 0); // pass angle, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/0ot3y1B.png "Polar.ellipse")

- Multiple Ellipse

``` JavaScript
function draw() {
  Polar.ellipses(6, 100, 50); // pass number of ellipse, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/g9yuIyV.png "Advanced Polar.ellipse")

- Line

``` JavaScript
function draw() {
  Polar.line(0, 100); // pass angle and radius to polar system
}
```
![alt text](https://i.imgur.com/wWzEtwW.png "Polar.line")

- Multiple Line

``` JavaScript
function draw() {
  Polar.lines(3, 100); // pass number of lines and radius to polar system
}
```
![alt text](https://i.imgur.com/VQfvhwN.png "Advanced Polar.line")

- Regular Hexagon

``` JavaScript
function draw() {
  Polar.hexagon(0, 125, 0); // pass angle, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/qyohW6H.png "Polar.regularHexagon")

- Multiple Regular Hexagon

``` JavaScript
function draw() {
  Polar.hexagons(6, 50, 50); // pass number of hexagons, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/lgOgB4t.png "Advanced Polar.regularHexagon")
