/**
 * @param {number} x
 * @return {number}
 */
// Reverse Integer
var reverse = function(x) {
    if(x < 0) return -1 * reverse(-x);
    const result = x.toString().split('').reverse().join('');
    return (result > 2**31 -1) ? 0 : result;
};