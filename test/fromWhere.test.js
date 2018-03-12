describe('The fromWhere function',function(){
  var regNumber = 'CA 123 456';
  it('should return what town a registration number is from',function(){
    assert.equal(fromWhere(regNumber),'Cape Town');
  });
});
