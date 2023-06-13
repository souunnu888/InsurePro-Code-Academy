/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};

// Write code here
function sumObjectValues(nums){
    let sum = 0;
    for(let key in nums){
       if(typeof(nums[key]) === "number") sum += nums[key] ;
    }
    return sum;
}

console.log(sumObjectValues(nums));
//42