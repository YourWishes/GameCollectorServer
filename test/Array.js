let chai = require('chai');
let assert = require('assert');
let expect = chai.expect;
let ArrayCommon = require('./../common/Array');

describe('Array Commons', () => {
    describe('#indexOf', () => {
        it('should return the index', () => {
            expect([4, 5, 9, 3].indexOf(9)).to.equal(2);
        });
        
        it('should return -1 when the value is not present', () => {
            expect([4, 5, 9, 3].indexOf(1)).to.equal(-1);
        });
        
        if('should return the first index if the element appears multiple times in the array', () => {
            expect([4, 1, 3, 8, 1, 3, 9, 2].indexOf(3)).to.equal(2);
        });
        
        it('should return -1 if no object is supplied', () => {
            expect([1, 2, 3, 4, 5, 6, 7, 8].indexOf(11)).to.equal(-1);
        });
        
        it('should fail on static call', () => {
            expect(() => {Array.indexOf(3)}).to.throw();
        });
    });
    
    describe('#removeObject', () => {
        it('should remove a specific object', () => {
            let objA = {name: "Object A"};
            let objB = {name: "Object B"};
            let objC = {name: "Object C"};
            let array = [objA, objB, objC];
            
            expect(array.removeObject(objB)).to.eql([objA, objC]);
        });
        
        it('should remove the first object if it appears multiple times', () => {
            let objA = {name: "Object A"};
            let objB = {name: "Object B"};
            let objC = {name: "Object C"};
            let array = [objA, objB, objC, objB];
            
            expect(array.removeObject(objB)).to.eql([objA, objC, objB]);
        });
        
        it('should do nothing if no object is supplied', () => {
            let objA = {name: "Object A"};
            let objB = {name: "Object B"};
            let objC = {name: "Object C"};
            let array = [objA, objB, objC];
            
            expect(array.removeObject()).to.eql([objA, objB, objC]);
        });
        
        it('should not remove anything if the object doesn\'t exist in the array', () => {
            let objA = {name: "Object A"};
            let objB = {name: "Object B"};
            let objC = {name: "Object C"};
            let objD = {name: "Object D"};
            let array = [objA, objB, objC];
            
            expect(array.removeObject(objD)).to.eql([objA, objB, objC]);
        });
        
        it('should fail on static call', () => {
            expect(() => Array.removeObject(1)).to.throw();
        });
    });
    
    describe('#shuffle', () => {
        it('should often be random', () => {
            let c = 0;
            let l = 1000;
            
            for(let i = 0; i < l; i++) {
                let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                arr.shuffle();
                
                if(arr != [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) c++;
            }
            let p = c/l;
            
            expect(p).to.be.above(0.75);
        });
        
        it('should fail on static call', () => {
            expect(() => Array.shuffle()).to.throw();
        });
    });
    
    describe('#contains', () => {
        it('should return true if the object exists in the array', () => {
            let objA = {name: "Object A"};
            let objB = {name: "Object B"};
            let objC = {name: "Object C"};
            let objD = {name: "Object D"};
            let array = [objA, objB, objC, objD];
            
            expect(array.contains(objB)).to.equal(true);
        });
        
        it('should return false if the object isn\'t in the array', () => {
            let objA = {name: "Object A"};
            let objB = {name: "Object B"};
            let objC = {name: "Object C"};
            let objD = {name: "Object D"};
            let array = [objA, objC, objD];
            
            expect(array.contains(objB)).to.equal(false);
        });
        
        it('should return false if no object is supplied', () => {
            let objA = {name: "Object A"};
            let objB = {name: "Object B"};
            let objC = {name: "Object C"};
            let objD = {name: "Object D"};
            let array = [objA, objC, objD];
            
            expect(array.contains()).to.equal(false);
        });
        
        it('should fail on static call', () => {
            expect(() => Array.contains(1)).to.throw();
        });
    });
    
    describe('#find', () => {
        it('should find the element matching the function', () => {
            let objA = {name: "Object A"};
            let objB = {name: "Object B"};
            let objC = {name: "Object C"};
            let objD = {name: "Object D"};
            let array = [objA,objB,objC, objD];
            
            let predicate = function(e) {
                return e.name === "Object B";
            }
            expect(array.find(predicate)).to.equal(objB);
        });
        
        it('should return undefined if the object was not found', () => {
            let objA = {name: "Object A"};
            let objB = {name: "Object B"};
            let objC = {name: "Object C"};
            let objD = {name: "Object D"};
            let array = [objA, objC, objD];
            
            let predicate = function(e) {
                return e.name === "Object B";
            }
            expect(array.find(predicate)).to.be.undefined;
        });
        
        it('should throw an error without a predicate function', () => {
            let objA = {name: "Object A"};
            let objB = {name: "Object B"};
            let objC = {name: "Object C"};
            let objD = {name: "Object D"};
            let array = [objA, objB, objC, objD];
            
            expect(() => array.find()).to.throw();
        });
        
        it('should fail on static call', () => {
            let predicate = function(e) {
                return e.name === "Object B";
            }
            expect(() => Array.find(predicate)).to.throw();
        });
    });
});