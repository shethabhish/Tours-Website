# Homework #4 Solution

**Sai Shethabhish Naidu Palla**

**NetID: xq4954**

# Question 1
(a)

Nodejs version: v10.16.3

NPM version: 6.9.0

(d)

![1](images/2.png)

# Question 2

(a&b)

![2](images/3.PNG)

(c)


![3](images/4.png)

# Question 3

(a)

![4](images/3.PNG)

(b)

![5](images/5.png)

**ProcessMD.js File**

		import commonmark from "commonmark";

		let output1=document.getElementById("output");
		let btn1=document.getElementById("btn");

		var reader = new commonmark.Parser();
		var writer = new commonmark.HtmlRenderer();

		function parser1() {

			let input1=document.getElementById("input");
		  	var parsed = reader.parse(input1.value);
		  	var result = writer.render(parsed); 

		  	console.log(result);
		  	output1.innerHTML=result;
		}

		btn1.addEventListener("click",parser1);

# Question 4

(a & b)

**ProcessMD.js File**

		import commonmark from "commonmark";
		import hljs from 'highlight.js';
		import 'highlight.js/styles/idea.css'

		let output1=document.getElementById("output");
		let btn1=document.getElementById("btn");

		var reader = new commonmark.Parser();
		var writer = new commonmark.HtmlRenderer();

		function parser1() {

			let input1=document.getElementById("input");
		  	var parsed = reader.parse(input1.value);
		  	var result = writer.render(parsed); 

		  	console.log(result);
		  	output1.innerHTML=result;

		  	document.querySelectorAll('pre code').forEach(block) = {
		  		hljs.highlightBlock(block);
		  	};
		}

		btn1.addEventListener("click",parser1);

(d)

 JavaScript file size : 1.2 MB

 CSS file size: 1.4 kb

![6](images/6.png)
![7](images/7.PNG)

# Question 5



