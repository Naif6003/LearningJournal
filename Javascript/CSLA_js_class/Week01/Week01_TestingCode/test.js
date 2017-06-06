function findLargest(arr){
  let max = arr[0]
  for (let i = 1; i < arr.length; i++){
    if arr[i] > max
      max = arr[i]
  }
}

const values = [2, 5, 8, 9, 232, 9, 6]

console.log(findLargest(values))
