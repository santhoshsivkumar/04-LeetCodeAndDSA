// ['banana', 'apple', 'orange', 'mango','papaya','jackfruit','mango','kiwi','apple']

function getUniqueAndSortedByLength(array) {
  let uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    let isExists = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        isExists = true;
        break;
      }
    }
    if (!isExists) uniqueArray.push(array[i]);
  }

  for (let _index = 0; _index < uniqueArray.length; _index++) {
    for (let index = 0; index < uniqueArray.length; index++) {
      if (uniqueArray[_index].length > uniqueArray[index].length) {
        let temp = uniqueArray[_index];
        uniqueArray[_index] = uniqueArray[index];
        uniqueArray[index] = temp;
      }
    }
  }

  //   let uniqueArray = [...new Set(array)].sort((x, y) => y.length - x.length);

  console.log(uniqueArray);
}

const array = [
  "banana",
  "apple",
  "orange",
  "mango",
  "papaya",
  "jackfruit",
  "mango",
  "kiwi",
  "apple",
];

// getUniqueAndSortedByLength(array);

let arr = [3, 2, 3];

function majorityElement(nums) {
  const counts = {};
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] = (counts[nums[i]] || 0) + 1;
    if (counts[nums[i]] > nums.length / 2)
      console.log(`Majority Element: ${nums[i]}`);
  }
  console.log(counts);
}
majorityElement(arr);
