class Dog{
    constructor(name,breed,color){
        this.name = name ;
        this.breed = breed ;
        this.color = color
    }
    bark(){
        console.log('Wooof')
    }
}
// The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

class chihuahua extends Dog{
    constructor(name){
        super(name)
    }
    smallBark(){
        console.log('Small wuff')
    }
}
const myPet = new chihuahua('Max')

const Dog1 = new Dog('Rocky','Labrador','white')
const Dog2 = new Dog('Daisy','Pitbull','Black')

Dog1.bark()
myPet.bark() //getting the parent function from Parent Class

console.log(myPet.name)