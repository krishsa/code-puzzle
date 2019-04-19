const api = require('./repeat-chars');

describe("Repeat Char Test", () => {
    it("should pass all conditions when a is greater than b", ()=>{
        expect(api.createRepeatedString(1,1)).toBe('ab');
        expect(api.createRepeatedString(2,1)).toBe('aab');
        expect(api.createRepeatedString(3,1)).toBe('aaba');
        expect(api.createRepeatedString(4,1)).toBe('aabaa');
        expect(api.createRepeatedString(5,1)).toBe('NotPossible'); // error - MaxOut

        expect(api.createRepeatedString(4,2)).toBe('aabbaa');
        expect(api.createRepeatedString(3,2)).toBe('aabba'); 
        expect(api.createRepeatedString(4,4)).toBe('aabbaabb');      
    });

    it("should pass all conditions when b is greater than a", ()=>{
        expect(api.createRepeatedString(1,1)).toBe('ab');
        expect(api.createRepeatedString(1,2)).toBe('bba');
        expect(api.createRepeatedString(1,3)).toBe('bbab');
        expect(api.createRepeatedString(1,4)).toBe('bbabb');
        expect(api.createRepeatedString(1,5)).toBe('NotPossible'); // error - MaxOut

        expect(api.createRepeatedString(2,4)).toBe('bbaabb');
        expect(api.createRepeatedString(4,4)).toBe('aabbaabb'); //bbaabbaa
        expect(api.createRepeatedString(2,3)).toBe('bbaab');       

        expect(api.createRepeatedString(10,7)).toBe('aabbaabbaabbaabaa');
        expect(api.createRepeatedString(10,8)).toBe('aabbaabbaabbaabbaa');
    });
});