let chai = require('chai');
let assert = require('assert');
let expect = chai.expect;
let NumberCommon = require('./../common/Number');

describe('Number Commons', () => {
    describe('#pad', () => {
        it('should stringify integers', () => {
            expect((420).pad(0)).to.equal("420");
        });
        
        it('should prepend a two digit number with a zero', () => {
            expect((69).pad(3)).to.equal("069");
        });
        
        it('should prepend a two digit number with two zeros', () => {
            expect((69).pad(4)).to.equal("0069");
        });
        
        it('should default two a two digit pad.', () => {
            expect((5).pad()).to.equal("05");
        });
    });
});