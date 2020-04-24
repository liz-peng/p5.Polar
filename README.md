# p5.Polar
**[WIP]**

p5.Polar is a JavaScript library that extend [p5.js](https://p5js.org/) standard drawing functions with versions using polar coordinates. The library converts polar coordinate to cartesian coordinate, and abstracts the mathematics required for making many types of geometric patterns.

![alt text](https://i.imgur.com/ZjgWIoF.png "p5.Polar example") 

![alt text](https://i.imgur.com/PXTtO8M.png "p5.Polar example") 

## How to add library to your p5.js sketch
[Using a library](https://p5js.org/libraries/) 

Download p5.Polar.js or the minified version, p5.Polar.min.js, to your local environment. Then link p5.Polar.js or p5.Polar.min.js to your HTML file. If you are using [p5.js web editor](https://editor.p5js.org/), upload p5.Polar.js or p5.Polar.min.js to your sketch files. Then link p5.Polar.js or p5.Polar.min.js to the index.html.

## Example
### Basic usage
[1] Set the center of polar coordinate system
- polar.setCenter()

[2] Single drawing functions
- polarLine( angle, radius, [distance] )
- polarTriangle( angle, radius, [distance] )
- polarSquare( angle, radius, [distance ) 
- polarPentagon( angle, radius, [distance] )
- polarHexagon( angle, radius, [distance] ) 
- polarHeptagon( angle, radius, [distance] )
- polarOctagon( angle, radius, [distance] )
- polarEllipse( angle, widthRadius, heightRadius, [distance] )
- polarPolygon( number, angle, radius ) 

[3] Multiple drawing functions
- polarLines(number, radius, distance, [callback])
- polarTriangles(number, radius, distance, [callback])
- polarSquares(number, radius, distance, [callback]) 
- polarPentagons(number, radius, distance, [callback])
- polarHexagons(number, radius, distance, [callback]) 
- polarHeptagons(number, radius, distance, [callback])
- polarOctogons(number, radius, distance, [callback])
- polarEllipses(number, widthRadius, heightRadius, distance, [callback])

#### Single drawing function: polarTriangle()
###### Draw a triangle with the angle, radius and distance from the center point
<img src="https://imgur.com/KiSE1WA.png" width="50%" height="50%" />

``` JavaScript
function draw() { 
    polar.setCenter(width/2, height/2);
    polarTriangle(0, 50, 0);
}
```

#### Multiple drawing function: polarEllipses()
###### Draw a ring of ellipses with the number of shape, width and height of radius, and distance from the center point
<img src="https://imgur.com/poEF2xK.png" width="50%" height="50%" />

``` JavaScript
function draw() { 
    polar.setCenter(width/2, height/2);
    polarEllipses(6, 50, 50, 100);
}
```
