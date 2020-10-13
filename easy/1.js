
var twoSum = function(nums, target) {
    const map = new Map();
    for(let [index, num] of nums.entries()){
        if(map.has(num)) return [map.get(num), index]
            map.set(target - num, index)
    }
};

const result = twoSum([2,7,11,15], 9)
console.log("result", result)
