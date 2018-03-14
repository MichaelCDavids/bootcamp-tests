describe('The findItemsOver function',function(){
  it('should take in a list of objects and return how many items over the threshold',function(){
    assert.equal(findItemsOver(itemList,10),2);
  });
  it('should take in a list of objects and return how many items over the threshold',function(){
    assert.equal(findItemsOver(itemList,4),3);
  });
});
