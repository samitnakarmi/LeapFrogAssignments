

// var elements = document.getElementbyID('box');


// function plot(x,y){
// 	var obj = document.createElement('div');


// 	obj.style.position = 'absolute';
// 	obj.style.top = y+'px';
// 	obj.style.left = x+'px';


// 	div.appendChild(obj);


// }

// var position = {
//   x: 20,
//   y: 40
// };

var dimensions = {
  width: 10,
  height: 10
};

var container = document.getElementById('container');


function plot(x,y){
var point = document.createElement('div');

container.appendChild(point);

point.style.width = dimensions.width + 'px';
point.style.height = dimensions.height + 'px';

point.style.top = y + 'px';
point.style.left = x + 'px';

point.style.background = 'blue';

point.style.position = 'absolute';

}


var pts = [
    {x: 10, y: 20},
    {x: 40, y: 40},
    {x: 60, y: 20},
    {x: 250, y: 50},
    {x: 140, y: 140},
    {x: 30, y: 230},
    {x: 320, y: 320},
    {x: 110, y: 410}
    
];


pts.forEach(function(item)
{
	plot(item.x,item.y);
});




