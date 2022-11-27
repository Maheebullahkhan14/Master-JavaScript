// const arr1 = ['a','b','c','d']

// const arr2 = [...arr1,'e','f','g']
// console.log(arr2)

// function myfn(x , y , ...params){
//     console.log(x)
//     console.log(y)
//     console.log(...params)
// }

// myfn('a','b','c','d','e','f')

// 3 Example

// const {x , y , ...z} = {x:1 ,y:2 , a:4 , b: 3, c:4}
// console.log(x)
// console.log(y)
// console.log(z)

// Student grades

// function createstudent(firstname , lastname , ...grades){


// const avggrade = grades.reduce((acc,cur) =>acc+cur , 0)/grades.length

// return{
//     firstname:firstname,
//     lastname : lastname,
//     grades: grades,
//     avggrades :avggrade
// }

// }

// const student = createstudent('Khan','Maheebullah',10,8,2,9)
// console.log(student)

// Object properties spreading

// const myobj = { x:1,y:2,a:3,b:4}

// const{x,y,...z} = myobj
// console.log(x)
// console.log(y)
// console.log(z)

// const n = {x , y , ...z}
// console.log(n)