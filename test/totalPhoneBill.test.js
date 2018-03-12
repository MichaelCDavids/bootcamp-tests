describe('The totalPhoneBill function',function(){
  var projectedUsage = 'call, sms, call, call, call, call, sms, sms';
  it('should take a projected string of your phone bill usage and return the total phone bill',function(){
    assert.equal(totalPhoneBill(projectedUsage),'R15.70');
  });
  
});
