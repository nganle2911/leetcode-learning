/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
    var newArr = [];
    var count = 0;
    var max = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            if (nums[i] === 1) {
                newArr.push(count + 1);
            } else {
                newArr.push(count);
            }
        } else {
            if (nums[i] === 1) {
                count++;
            } else {
                newArr.push(count);
                count = 0;
            }
        }
    }

    // after having a new array, return the max number
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] > max) {
            max = newArr[i];
        }
    }

    return max; 
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1,0]));