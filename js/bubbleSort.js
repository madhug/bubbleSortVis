paper.install(window);

var numbers = new Array();

for (var i = 0; i < 8; i++)
{
	numbers[i] = Math.random()*256;
	console.log(numbers[i]);
}

var ang = 360.00/8.00;

var center = view.center;
var rad = 20; 

window.onload = function() {
	// Get a reference to the canvas object
	var canvas = document.getElementById('myCanvas');
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
	
	
}

var circle = paper.Path.Circle(center,rad); 
//circle.strokeColor = 'white';
//circle.strokeWeight = 20;

var myGroup = new paper.Group(circle);

view.onResize = function(event) {
    // Whenever the window is resized, recenter the path:
    myGroup.position = paper.view.center;
}

/*position mini circle*/
var i = 0; 
var arr = 0; 



function placeCircles(callback)
{
	if(i<360)
	{
		console.log("drawing a circle at angle : " + i);
		var x = circle.position.x + rad * Math.cos(Math.PI * i / 180);
		var y = circle.position.y + rad * Math.sin(Math.PI * i / 180);
		
		var chotaCircle = paper.Path.Circle(new Point(x,y), 10);
		chotaCircle.strokeWeight = 20;
		chotaCircle.fillColor = new paper.HsbColor(numbers[arr], 1, 1);
		myGroup.addChild(chotaCircle);
		view.draw();
		i+=ang;
		arr++;
		//placeCircles(callback);
		setTimeout(function() {placeCircles(callback)},100);
	}
	else
	{
		i = 0; 
		arr = 0;
		//callback();
		setTimeout(callback,100);
	}
}

var swapped = true;
bubbleSort();

function bubbleSort()
{
	console.log("entering bubblesort: " + swapped);
	if(swapped == true)
	{
		swapped = false;
		for(var j=0; j<8; j++)
		{
			if(numbers[j] > numbers[j+1])
			{
				var temp = numbers[j];
				numbers[j] = numbers[j+1];
				numbers[j+1] = temp;
				swapped = true;
			}
		}
		rad += 30;
		placeCircles(bubbleSort);
		//setTimeout(placeCircles(bubbleSort),1000);
	}
}