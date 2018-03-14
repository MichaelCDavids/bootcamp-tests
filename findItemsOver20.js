
var itemList1 = [
  {name : 'apples', qty : 9},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'kiwi', qty : 13}
];
var itemList2 = [
  {name : 'apples', qty : 30},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'grapes', qty : 30},
  {name : 'oranges', qty : 21},
  {name : 'kiwi', qty : 32}
];
function findItemsOver20(listOfObjects){
  	var newQuantityObjectList = [];
  	for(var i=0;i<listOfObjects.length; i++){
    	var listItem = listOfObjects[i];
      	var itemQty = listItem.qty;
      	if(itemQty>20){
        	newQuantityObjectList.push(listOfObjects[i]);
        }
	}

  	return newQuantityObjectList.length;
}
