describe('The mostProfitableDepartment function',function(){

  it('should take in a list of objects of departments of a store and return which is the most profitable department in this case it should return outdoor',function(){
    assert.equal(mostProfitableDepartment(salesData1),'outdoor');
  });
  it('should take in a list of objects of departments of a store and return which is the most profitable department in this case it should return hardware',function(){
    assert.equal(mostProfitableDepartment(salesData2),'hardware');
  });
});
