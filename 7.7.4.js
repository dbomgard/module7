function setFullName (fullName) {
    this.fullName = fullName
}
  
const person = {
    name : 'John',
    age: 24
}
  
const setPersonFullName = setFullName.bind(person)
setPersonFullName('John Smith')
console.log(person.fullName)