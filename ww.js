self.addEventListener('message', function(e) {
	var data = e.data
	var xCoordinates = data.x;
	var yCoordinates = data.y;
	var Cs = [[],[]];
	var holder = [xCoordinates, yCoordinates];
	var Z;
	for (var i=0; i <= data.level; i++) {

		for (var j=0; j<(holder[0].length - 1);j++){
			//console.log(Cs);
			Z = fractilize([holder[0][j],holder[0][j+1]],[holder[1][j],holder[1][j+1]])
			Cs[0] = Cs[0].concat(Z[0]);
			Cs[1] = Cs[1].concat(Z[1]);

		}
		holder = Cs;
		Cs = [[],[]];
	}
	self.postMessage(holder);
}, false);

function fractilize(xCoords,yCoords){
//find the direction of the line
	var newXcoords = [0,1,2,3,4,5];
	var newYcoords = [0,1,2,3,4,5];
	var lineLength;
	var unitDist;
	//first and last items are the same
	
	newXcoords[0] = xCoords[0];
	newYcoords[0] = yCoords[0];
	
	newXcoords[5] = xCoords[1];
	newYcoords[5] = yCoords[1];
	
	if(xCoords[0] == xCoords[1]){ //x's are the same, line is vertical
		lineLength = yCoords[0] - yCoords[1];
		unitDist = lineLength / 3;
		
		newXcoords[1] = xCoords[0];
		newXcoords[2] = xCoords[0] + unitDist;
		newXcoords[3] = xCoords[0] + unitDist;
		newXcoords[4] = xCoords[0];
		
		newYcoords[1] = yCoords[0] - unitDist;
		newYcoords[2] = yCoords[0] - unitDist;
		newYcoords[3] = yCoords[0] - (unitDist*2);
		newYcoords[4] = yCoords[0] - (unitDist*2);
	}
	else{ //y's are the same, line is horizontal
		lineLength = xCoords[0] - xCoords[1];
		unitDist = lineLength / 3;
		
		newXcoords[1] = xCoords[0] - unitDist;
		newXcoords[2] = xCoords[0] - unitDist;
		newXcoords[3] = xCoords[0] - (unitDist*2);
		newXcoords[4] = xCoords[0] - (unitDist*2);
		
		newYcoords[1] = yCoords[0];
		newYcoords[2] = yCoords[0] - unitDist;
		newYcoords[3] = yCoords[0] - unitDist;
		newYcoords[4] = yCoords[0];
	}
	 
	return ([newXcoords,newYcoords]);
}