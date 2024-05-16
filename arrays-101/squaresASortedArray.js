/**
 * ??? Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    var newArr = [];
    var square = 0;

    // square each num of nums 
    for (var i = 0; i < nums.length; i++) {
        square = nums[i] * nums[i];
        newArr.push(square);
    }

    // sort newArr 
    for (var i = newArr.length; i > 0; i--) {
        for (var j = 0; j < i-1; j++) {
            if (newArr[j] > newArr[j+1]) {
                var temp = newArr[j];
                newArr[j] = newArr[j+1];
                newArr[j+1] = temp; 
            }
        }
    }

    return newArr; 

};

console.log(sortedSquares([-4,-1,0,3,10]));