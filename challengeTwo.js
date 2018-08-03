// array = [4,7,12,12,3,7,2,8,7];
// target = 19;

// function sumTwo(array, target){
//     var results = [];
//     var hashTable = {};

//     for(let i = 0; i < array.length; i++){

//         var targetMinusArray = target - array[i];

//         if(hashTable[targetMinusArray] != undefined){
//             if(hashTable[array[i]]){
//                 continue
//             }
//             else {
//                 results.push(array[i]);
//             }
//             if(results.length == 2){
//                 break;
//             }
//         }
//         hashTable[array[i]] = true;
//     }
//     console.log(results);
// }

// sumTwo(array, target)



// refer to notes... I kick ass! I like this way better.
// The algorithm above doesn't return what I want when duplicate numbers are invloved.
array = [4,7,12,12,3,7,2,8,7,12];
target = 19;

const twoSum = (array, target) => {
    let map = {},
        results = [];
    for (let i=0; i<array.length; i++) {
      if (map[array[i]] !== undefined) {
        results.push([map[array[i]], array[i]])
      } else {
        map[target - array[i]] = array[i];
      }
    }
    return results;
  }
  console.log(twoSum(array, target));
  