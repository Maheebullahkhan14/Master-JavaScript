function makefn(){
    const name = 'Mozilla'

    function displayName(){
        console.log(name)
    }
    return displayName
}

const myfn = makefn()
myfn()