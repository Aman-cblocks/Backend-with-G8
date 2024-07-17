// // // const arr = [1,2,3,4]
// // // // for(let i=0;i<arr.length;i++){
// // // //     console.log(arr[i])
// // // // }
// // // // For of Loop
// // // // for(let value of arr){
// // // //     console.log(value)
// // // // }

// // // // For each loop

// // // // arr.forEach(function(value,index){
// // // //     console.log(value,index)
// // // // })


// // // // Map Method

// // // // const result= arr.map(function(value,index,array){
// // // //     return value*100
// // // // })
// // // // filter Method
// // // // const result = arr.filter(function(value,index,array){
// // // //     return (value%2==0)
// // // // })

// // // // reduce Method

// // // const result = arr.reduce(function(acc,curr,array){
// // //     console.log(acc,curr )
// // //     return acc.concat(curr+100)
// // // },[])


// // // console.log( result,typeof result)


// // //objects

// // var person = {
// //     name:"jack",
// //     age:45,
// //     city:"ny",
// //     citizen:true,
// //     age:32
// // }
// // function newKey (){
// //     return "name"
// // }

// // person.homeAddress="address"
// // // console.log(person[newKey()])


// // //Loops in Objects

// // for( let key in person){
// //     console.log(key,person[key])
// // }

// // console.log(Object.keys(person))
// // console.log(Object.values(person))

// const set = new Set()
// set.add(2);
// set.add(2);
// set.add(3)
// console.log(set);


//functions

function add(a,b){
    return a+b    //function declaration
}


const subtract = function(a,b){
    return a-b;  //function expression
}

const multiply = (a,b)=> a*b   // arrow functions
