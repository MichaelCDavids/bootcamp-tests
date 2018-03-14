describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    it('should greet Michael correctly', function(){
        assert.equal('Hello, Michael', greet('Michael'));
    });

});
