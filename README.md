# Homework #3 Solution

**Sai Shethabhish Naidu Palla**

**NetID: xq4954**

# Question 1

 (a)
 ![random](images/1.png)

 **randomDrawing code**

	 <!DOCTYPE html>
		<html lang="en">
		<head>
		    <meta charset="utf-8">
		
		<title>Random Drawing</title>

		<script async src="drawing.js"></script>
	    	<script defer src="drawing.js"></script>
	    	<script src="drawing.js"></script>

	    	<link rel="stylesheet" href="drawing.css" />
		</head>

		<body>
		<h1>Random Drawing Fun!</h1>
	  	<h2>Brought to you by uh3536</h2>

		<svg id="circles" version ="1.1" baseProfile="full" height="800" width="800" xmlns="http://www.w3.org/2000/svg">
		</svg>
	    
		</body>
		</html>

**code of drawing**
	var mySVG = document.getElementById("circles");
	var maxSize = 50,
	maxX = 1000,
	maxY = 500;
	maxR = 170;



	function randomCircles() {
	let x = Math.random()*(maxX - maxSize);
	let y = Math.random()*(maxY - maxSize);
	let r = Math.random()*(maxR - maxSize);
	let width = Math.random()*maxSize;
	let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", x);
	circle.setAttribute("cy", y);
	circle.setAttribute("width", width);
	circle.setAttribute("height", width);
	circle.setAttribute("r", r*0.5);
	let colorStr = `rgb(${255*Math.random()}, ${255*Math.random()}, ${255*Math.random()})`;
	circle.setAttribute("fill", colorStr);
	circle.setAttribute("fill-opacity", 0.7);
	return circle;
	}
	for (let i = 0; i < 30; i++) {
	  mySVG.appendChild(randomCircles());
	}

(b)
