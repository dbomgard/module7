function printInfo () {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}
  
let person = {
    name : 'John',
    age : 23
}
  
printInfo.call(person)