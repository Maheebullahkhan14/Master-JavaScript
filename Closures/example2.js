function makeAdder(x){
    return function (y){
        return x + y
    }
}

const add = makeAdder(5)
console.log(add(10))