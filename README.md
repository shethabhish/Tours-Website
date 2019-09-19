# Homework #3 Solution

**Sai Shethabhish Naidu Palla**

**NetID: xq4954**

# Question 1

 (a)
 ![random](images/1.png)

 There was a potential issue, so we solved it by the below code:

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
