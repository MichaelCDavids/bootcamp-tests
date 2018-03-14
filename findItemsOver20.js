<<<<<<< HEAD
var itemList = [
  {name : 'apples', qty : 9},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'kiwi', qty : 13}
];
var itemList1 = [
  {name : 'apples', qty : 30},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'grapes', qty : 30},
  {name : 'oranges', qty : 21},
  {name : 'kiwi', qty : 32}
];

function findItemsOver20(listOfObjects){
  console.log('');
  console.log(listOfObjects);
	var newQuantityObjectList = [];
	for(var i=0;i<listOfObjects.length; i++){
  	var listItem = listOfObjects[i];
    console.log(listItem);
    var itemQty = listItem.qty;
    if(itemQty>20){
      newQuantityObjectList.push(listOfObjects[i]);
    }
    console.log(newQuantityObjectList);
	}
  console.log("The amount of items over twenty is = "+newQuantityObjectList.length);
	return newQuantityObjectList.length;
}

findItemsOver20(itemList);

findItemsOver20(itemList1);
=======
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
>>>>>>> deaf173c71588be8a793d784745a905fb9ebb5a6
