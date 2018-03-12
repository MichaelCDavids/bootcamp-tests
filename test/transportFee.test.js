describe('The transportFee function',function(){
  var shift = 'morning';
  it('should return how much your transportation costs should be depending on when your shift starts',function(){
    assert.equal(transportFee(shift),'R20');
  });
  
});
