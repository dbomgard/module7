function setFullName (fullName) {
    this.fullName = fullName
}
  
let person = {
    name : 'John',
    age: 24
}
  
let setPersonFullName = setFullName.bind(person)
setPersonFullName('John Smith')
console.log(person.fullName)