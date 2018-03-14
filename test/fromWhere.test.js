describe('The fromWhere function',function(){

  it('should return what town a registration number is from',function(){
    assert.equal(fromWhere(vrn),'Cape Town');
  });
  it('should return what town a registration number is from',function(){
    assert.equal(fromWhere(vrn1),'Bellville');
  });
});
