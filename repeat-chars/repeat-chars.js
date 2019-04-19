const MAX_ALLOWED_REPEATATION = 2;

 const createRepeatedString = (a, b) => {
    let result = "";
    let maxSize = a +b;
    let bCount = 0;
    let aCount = 0;

    if(Math.abs(a-b) > MAX_ALLOWED_REPEATATION + 1){
        return "NotPossible"
    }
    if(a >= b){
        for(i=0; i< maxSize; i++){
            if(a > 1 && aCount <= a-2) {
                result = result + 'aa';
                aCount = aCount + 2;
            }else if(aCount <= a-1) {
                result = result + 'a';
                aCount = aCount + 1;
            }
    
            if(b > 1 && bCount <= b-2) {
                result = result + 'bb';
                bCount = bCount + 2;
            }else if(bCount <= b-1) {
                result = result + 'b';
                bCount = bCount + 1;
            }
        }
    }else {
        for(i=0; i< maxSize; i++){
            if(b > 1 && result.length <= maxSize - 2) {
                result = result + 'bb';
                bCount = bCount + 2;
            }else if(bCount <= b-1 && result.length <= maxSize - 1) {
                result = result + 'b';
                bCount = bCount + 1;
            }
            if(a > 1 && result.length <= maxSize - 2) {
                result = result + 'aa';
                aCount = aCount + 2;
            }else if(aCount <= a-1 && result.length <= maxSize - 1) {
                result = result + 'a';
                aCount = aCount + 1;
            }
        }
    }
    return result ;
};

createRepeatedString(1,2);

module.exports = {
    createRepeatedString : createRepeatedString
}