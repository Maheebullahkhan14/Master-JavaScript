function mysteriouscalculator(a,b){
    var myvaribale = 5
    return {
        add : function(){
            var result = a + b + myvaribale
            return toFixedVariable(result)
        },
        sub : function(){
            var result = a - b - myvaribale
            return toFixedVariable(result)
        }

    }
    function toFixedVariable(value){
        return value.toFixed(2)
    }
}

var mycalculator = mysteriouscalculator(10.05,13.12)

console.log(mycalculator.add())