describe('The findItemsOver function',function(){
  var itemList = [
    {name : 'apples', qty : 9},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  var threshold = 10;
  it('should take in a list of objects and return how many items over the threshold',function(){
    assert.equal(findItemsOver(itemList,threshold),2);
  });
  
});
