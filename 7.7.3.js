let users = [
    {name:'Petya', age : 16},
    {name: 'Vika', age : 27},
    {name: 'Vasya', age: 32}
]
 
let ageFiltered = users.filter(user => user.age >= 18)
console.log(ageFiltered)
  
let names = users.map(user => user.name)
console.log(names)