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
//         // if(array[i] in hashTable){
//         //     hashTable.pop(array[i])
//         // }
//         hashTable[array[i]] = true;
//         console.log(hashTable)
//     }
//     console.log(results);
// }

// sumTwo(array, target)



// refer to notes... I kick ass! I like this way better.
array = [4,7,12,12,3,7,2,8,7,12];
target = 19;

const twoSum = (array, target) => {
    let map = {},
        results = [];

    for (let i=0; i<array.length; i++) {

      if (map[array[i]] !== undefined) {

        results.push([map[array[i]], array[i]])
        console.log([map[array[i]], array[i]])
      } 

      else {
        map[target - array[i]] = array[i];
      }

    }
    return results;
  }
  console.log(twoSum(array, target));
  