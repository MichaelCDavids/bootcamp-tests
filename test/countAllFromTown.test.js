describe('The countAllFromTown function',function(){
  var regNumbers = 'CJ 123456, CA 123456, CJ 123456, CA 12353456, CJ 525865, CJ 345586, CA 123456, CA 12456';
  var locationID = "CJ";
  it('should take in a string of registration numbers and return how many are from a certain town',function(){

    assert.equal(countAllFromTown(regNumbers,locationID),4);
  });
  
});
