var pow = require('../lib')

var expect  = require('chai').expect;

it('normal use case', function(done) {
	expect(pow.pow(2,2)).to.equal(4);
	done();
});
it('neg to pos use case', function(done) {
	expect(pow.pow(-2,2)).to.equal(4);
	done();
});
it('neg to neg use case', function(done) {
	expect(pow.pow(-2,3)).to.equal(-8);
	done();
});
it('0 to 0 use case', function(done) {
	expect(pow.pow(0,0)).to.equal(1);
	done();
});
it('x to 0 use case', function(done) {
	expect(pow.pow(2,0)).to.equal(1);
	done();
});
it('neg exp use case', function(done) {
	expect(pow.pow(2,-2)).to.equal(0.25);
	done();
});