function countAllFromTown(string,startString){
	var newString = string.split(",");
  	//console.log("--------------------------")
  	//console.log(newString);
  	//console.log(startString)
  	var newerString = [];
  	//console.log(newerString);
  	for(var i = 0 ; i < newString.length ; i++){
      var loopString = newString[i].trim();
      if(loopString.startsWith(startString)){
      	//console.log(newerString);
        newerString.push(loopString);
      }
    }
  //console.log(newerString);
  return newerString.length;
}
