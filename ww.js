self.addEventListener('message', function(e) {
	var data = e.data;
	var xCoordinates = data.x;
	var yCoordinates = data.y;
	for (j=0; j<(xCoordinates.length - 1);j++){
		XCs = XCs.concat(fractilize([xCoordinates[j],xCoordinates[j+1]],[yCoordinates[j],yCoordinates[j+1]],"x"));
		YCs = YCs.concat(fractilize([xCoordinates[j],xCoordinates[j+1]],[yCoordinates[j],yCoordinates[j+1]],"y"));
	}
	data.x = XCs;
	data.y = YCs;
	self.postMessage(data.x, data.y);
}, false);

function fractilize(xCoords,yCoords,exitVar){
	//find the direction of the line	
	var newXcoords = [0,1,2,3,4,5];
	var newYcoords = [0,1,2,3,4,5];
	var lineLength;
	var unitDist;
	//first and last items are the same
	newXcoords[0] = xCoords[0];newYcoords[0] = yCoords[0];
	newXcoords[5] = xCoords[1];newYcoords[5] = yCoords[1];
	
	if(xCoords[0] == xCoords[1]){ //x's are the same, line is vertical
		if(yCoords[0] > yCoords[1]){
			//going down
			lineLength = yCoords[0] - yCoords[1];
			unitDist = lineLength / 3;
			
			newXcoords[1] = xCoords[0];
			newXcoords[2] = newXcoords[1] + unitDist;
			newXcoords[3] = newXcoords[2];
			newXcoords[4] = newXcoords[1];
			
			newYcoords[1] = yCoords[0] - unitDist;
			newYcoords[2] = newYcoords[1];
			newYcoords[3] = newYcoords[2] - unitDist;
			newYcoords[4] = newYcoords[3]
		}
		else{
			//going up
			lineLength = yCoords[1] - yCoords[0];
			unitDist = lineLength / 3;
			
			newXcoords[1] = xCoords[0];
			newXcoords[2] = newXcoords[1] - unitDist;
			newXcoords[3] = newXcoords[2];
			newXcoords[4] = newXcoords[1];
			
			newYcoords[1] = yCoords[0] + unitDist;
			newYcoords[2] = newYcoords[1];
			newYcoords[3] = newYcoords[2] + unitDist;
			newYcoords[4] = newYcoords[3];
		}
	}
	else{ //y's are the same, line is horizontal
		if(xCoords[0] > xCoords[1]){
			//going left
			lineLength = xCoords[0] - xCoords[1];
			unitDist = lineLength / 3;
			
			newXcoords[1] = xCoords[0] - unitDist;
			newXcoords[2] = newXcoords[1];
			newXcoords[3] = newXcoords[2] - unitDist;
			newXcoords[4] = newXcoords[3];
			
			newYcoords[1] = yCoords[0];
			newYcoords[2] = newYcoords[1] + unitDist;
			newYcoords[3] = newYcoords[2];
			newYcoords[4] = newYcoords[1];
		}
		else{
			//going right
			lineLength = xCoords[1] - xCoords[0];
			unitDist = lineLength / 3;
			
			newXcoords[1] = xCoords[0] + unitDist;
			newXcoords[2] = newXcoords[1];
			newXcoords[3] = newXcoords[2] + unitDist;
			newXcoords[4] = newXcoords[3];
			
			newYcoords[1] = yCoords[0];
			newYcoords[2] = newYcoords[1] + unitDist;
			newYcoords[3] = newYcoords[2];
			newYcoords[4] = newYcoords[1];
		}
	}

	return ((exitVar=="x")?(newXcoords):(newYcoords));
	
}
