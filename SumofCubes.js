function sumofCubes(nums){
   var sum = 0;
    for(var i = 0; i < nums.length;i++){
        sum += nums[i]**3;
    }
    return sum;
}
console.log(sumofCubes([2,3]))
