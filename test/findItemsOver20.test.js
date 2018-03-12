describe('The findItemsOver20 function',function(){
  var itemList = [
    {name : 'apples', qty : 9},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  it('should take in a list of objects and return how many items have quantities over 20',function(){
    assert.equal(findItemsOver20(itemList),2);
  });
  
});
