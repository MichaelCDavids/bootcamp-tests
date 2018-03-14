describe('The findItemsOver20 function',function(){

  it('should take in a list of objects and return how many items have quantities over 20',function(){
    assert.equal(findItemsOver20(itemList),2);
  });
  it('should take in a list of objects and return how many items have quantities over 20',function(){
    assert.equal(findItemsOver20(itemList1),6);
  });
});
