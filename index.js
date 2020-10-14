
// Play ground
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(num) {
    const result = []
    let minus;
    let digits = num.toString().split('');
    if(digits[0] === '-'){
        minus = true;
        digits.shift()
    }
    for(let i = 1; i <= digits.length; i++){
        result.push(digits[digits.length - i])
    }
    let answer = result.join('')
    if(minus){
        answer = '-' + answer
    }
    return parseInt(answer)
};

const result = reverse(0)
console.log("result", result)
