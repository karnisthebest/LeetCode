var isPalindrome = function(x) {
    const reverse = x.toString().split('').reverse().join('');
    if(reverse === x.toString()){
        return true;
    } else {
        return false;
    }
};