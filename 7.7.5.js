function filterNumbers (arr) {
    let set = new Set(arr)
    const newArr = Array.from(set)
    newArr.sort((a, b) => a - b)
    return newArr
}
  
const nums = [3, 2, 14, 2, 45, 3]
  
console.log(filterNumbers(nums))