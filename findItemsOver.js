function findItemsOver(listOfObjects,threshold){
  	var newQuantityObjectList = [];
  	for(var i=0;i<listOfObjects.length; i++){
    	var listItem = listOfObjects[i];
      	var itemQty = listItem.qty;
      	if(itemQty>threshold){
        	newQuantityObjectList.push(listOfObjects[i]);
        }
	}
  	return newQuantityObjectList.length;
}
