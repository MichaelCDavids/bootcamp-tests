describe('The isFromBellville function', function(){
  var vrn = "CY 358 254";
  it('should check if registration number is from Bellville', function(){
    assert.equal(isFromBellville(vrn),true);
  });
  
});
