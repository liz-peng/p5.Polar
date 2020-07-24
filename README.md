# p5.Polar
**[WIP]**

p5.Polar is a JavaScript library that extend [p5.js](https://p5js.org/) standard drawing functions with versions using polar coordinates. The library converts polar coordinate to cartesian coordinate, and abstracts the mathematics required for making many types of geometric patterns.

![alt text](https://imgur.com/8V2uuzd.png "p5.Polar example") 

![alt text](https://i.imgur.com/PXTtO8M.png "p5.Polar example") 

![alt text](https://i.imgur.com/ww5tuWK.png "p5.Polar example") 

## Release Note (07/19/2020)
What's new in version 2.0?
- Instead of using polar.setCenter(x,y) to set the center point, now just simply call setCenter() function and pass the x and y values.
- Support drawing with [instance mode](https://p5js.org/examples/instance-mode-instantiation.html).
- Add multiple polygons drawing function.
- Special thanks to the project's advisor [@charlieroberts](https://github.com/charlieroberts) for all the tips and resources!

## How to add library to your p5.js sketch
[Using a library](https://p5js.org/libraries/) 

Download p5.Polar.js or the minified version, p5.Polar.min.js, to your local environment. Then link p5.Polar.js or p5.Polar.min.js to your HTML file. If you are using [p5.js web editor](https://editor.p5js.org/), upload p5.Polar.js or p5.Polar.min.js to your sketch files. Then link p5.Polar.js or p5.Polar.min.js to the index.html.

## Playground
Try out the library and create shapes and patterns at the p5.Polar [Playground](https://liz-peng.github.io/p5.Polar/playground.html) (Note: callback function is not available and will be supported soon).

## Examples & Documentation
### Basic Usage
#### Let each sketches have their center point
- setCenter( x, y )

#### [Single drawing function](#singleFunction)
- polarLine( angle, radius, [distance] )
- [polarTriangle( angle, radius, [distance] )](#polarTriangle)
- polarSquare( angle, radius, [distance ) 
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
- polarPolygons( number, number of edges, radius, distance, [callback] )

#### [Callback function](#callback)
The value of each member of args: 
- args[0] = number of shapes (from 1 to N)
- args[1] = angle 
- args[2] = radius 
- args[3] = distance


### Examples of Single Drawing Function <a name="singleFunction"></a>
#### polarTriangle() <a name="polarTriangle"></a>
###### Draw a single triangle with radius of 100 at the center of polar system
<img src="https://imgur.com/1oqHVUv.png" width="50%" height="50%" />

``` JavaScript
function draw() { 
    setCenter(width/2, height/2);
    polarTriangle(0, 100, 0);
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
    polarEllipse(0, 50, 100, 0);
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

