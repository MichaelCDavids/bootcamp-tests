describe('The countRegNumber function', function(){
    var vrn = "NK 358 254 GP,CK 256365,CA 235252";
    it('should take a string of registration numbers and count how many there are', function(){
        assert.equal(countRegNumber(vrn),3);
    });
    
});
