function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < array.length; startIndex ++){
    for(let endIndex = array.length - 1; endIndex > 0; endIndex --){
      if(array[startIndex] + array[endIndex] === target)
      return true;
    }  
    return false;
  }
  //return false;
}



/* 
  Write the Big O time complexity of your function here
  nested for loop is O(n squared)
*/

/* 
  Add your pseudocode here
takes an array and a target as parameters
iterates over the array
if two elements in the array can add up to the target
return true

[1,2,3,4,5], 6
^        ^
  ^    ^   return true 

  two iterations, 
  startIndex 
  end Index 
  if start + end = target, 
  return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
