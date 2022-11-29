class Car{
    constructor(name,model,price) {
        this.name = name ;
        this.model = model;
        this.price = price

    }
    showprice(){
        console.log(`price of ${this.name} is ${this.price}`)
    }
    underrange(price){
        if(price > this.price){
            console.log('Heavy Car')
        }
    }
}

const mypen = new Car('Fortuner','Toyota',500000)
const mySecCar = new Car('X-5','BMW',700000)
mySecCar.underrange(800000)