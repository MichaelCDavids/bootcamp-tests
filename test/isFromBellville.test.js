describe('The isFromBellville function', function(){

  it('should return true if registration number is from Bellville', function(){
    assert.equal(isFromBellville(vrn1),true);
  });
  it('should return false if registration number is not from Bellville', function(){
    assert.equal(isFromBellville(vrn2),false);
  });

});
