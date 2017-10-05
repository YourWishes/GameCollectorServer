let chai = require('chai');
let assert = require('assert');
let expect = chai.expect;
let StringCommon = require('./../common/String');

describe('String Commons', () => {
    describe('#isEmail', () => {
        it('should return true if it is an email', () => {
            expect(String.isEmail("test@website.com")).to.equal(true);
        });
        
        it('should return false if it\'s not an email.', () => {
            expect(String.isEmail("Not an email")).to.equal(false);
        });
        
        it('should return false if it\'s not quite an email', () => {
            expect(String.isEmail("test@website com")).to.equal(false);
        });
        
        it('should work on a string instance', () => {
            let email = "test@website.com";
            expect(email.isEmail()).to.equal(true);
        });
        
        it('should fail on static call with no arguments.', () => {
            expect(() => {String.isEmail()}).to.throw();
        });
    });
    
    describe('#replaceAll', () => {
        it('should replace all occurances of a string inside a string', () => {
            let lorem = "The quick brown fox jumps over the lazy dog.";
            expect(lorem.replaceAll("o", "a")).to.equal(
                "The quick brawn fax jumps aver the lazy dag."
            );
        });
        
        it('should remove all occurances of a string inside a string', () => {
            let lorem = "The quick brown fox jumps over the lazy dog.";
            expect(lorem.replaceAll("o", "")).to.equal(
                "The quick brwn fx jumps ver the lazy dg."
            );
        });
        
        it('should be case sensitive', () => {
            let lorem = "Hello World, How are you today?";
            expect(lorem.replaceAll("h", "")).to.equal("Hello World, How are you today?");
        });
        
        it('should use regular expressions', () => {
            let lorem = "1 2, buckle your shoe, 3, 4, step on the floor.";
            expect(lorem.replaceAll("[^A-z]", "")).to.equal("buckleyourshoesteponthefloor");
        });
        
        it('should fail on static call.', () => {
            expect(() => {String.replaceAll()}).to.throw();
        });
    });
    
    describe('#startsWith', () => {
        it('should return true if the string starts with the argument', () => {
            expect("Hello World".startsWith("Hel")).to.equal(true);
        });
        
        it('should return false if the string doesn\'t start with the argument', () => {
            expect("Hello World".startsWith("World")).to.equal(false);
        });
        
        it('should be case sensitive', () => {
            expect("Hello World".startsWith("h")).to.equal(false);
        });
    });
    
    describe("#isBlank", () => {
        it('should expect empty strings to be blank', () => {
            expect("".isBlank()).to.equal(true);
        });
        
        it('should consider spaces to be blank', () => {
            expect("      ".isBlank()).to.equal(true);
        });
        
        it('should consider newlines to be blank', () => {
            expect("    \n     \n    ".isBlank()).to.equal(true);
        });
        
        it('should consider carriage returns to be blank', () => {
            expect("    \n\r     \n\r    ".isBlank()).to.equal(true);
        });
        
        it('should consider tabs to be blank', () => {
            expect("\t".isBlank()).to.equal(true);
        });
        
        it('should consider words to be not blank', () => {
            expect('      Hello     '.isBlank()).to.equal(false);
        });
    });
});