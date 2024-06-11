const users = [
    {name:'Petya', age : 16},
    {name: 'Vika', age : 27},
    {name: 'Vasya', age: 32}
]
 
const ageFiltered = users.filter(user => user.age >= 18)
console.log(ageFiltered)
  
const names = users.map(user => user.name)
console.log(names)