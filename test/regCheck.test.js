describe('The regCheck function', function(){
    var vrn = "NK 358 254 GP";
    var li = "GP";
    it('should check where the registration number ends with the location identifier', function(){
        assert.equal(regCheck(vrn,li),true);
    });
    
});
