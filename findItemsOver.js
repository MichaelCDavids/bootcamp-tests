var itemList = [
  {name : 'apples', qty : 9},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3},
];

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
