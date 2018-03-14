describe('The yearsAgo function', function(){
  it('should check how many years ago it was from the current year',function(){
    var year = 2000;
    assert.equal(yearsAgo(year),18);
  });
});
