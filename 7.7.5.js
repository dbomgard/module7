function filterNumbers (arr) {
    let set = new Set(arr)
    let newArr = Array.from(set)
    newArr.sort((a, b) => a - b)
    return newArr
}
  
let nums = [3, 2, 14, 2, 45, 3]
  
console.log(filterNumbers(nums))