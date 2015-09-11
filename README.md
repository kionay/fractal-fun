fractal-fun
===========
Playing around with javascript, web workers, canvas, etc...


I'm using a coordinate system to create the simplest fractal i know, 
turning each line per fractal level of detail into 6 lines, coordinates changing with orientation.

Implementation of koch's snowflake fractal. Specifically at 90 degree angles to make the math easier (since this is an exercise with HTML5 canvas and web workers, not with fractals.)

There is zoom in, but no zoom out. There is a status indicator so you know the background worker is still churning out coordinates (time the next depth takes increases very quickly.)

Removed the progress bar, might put one back in some day.
