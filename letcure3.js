
// // // // // // // // // // debugger
// // // // // // // // // // console.log(b)
// // // // // // // // // var a= 100;
// // // // // // // // // let b =200;
// // // // // // // // // // console.log(a,b)
// // // // // // // // // var fun =()=>{
// // // // // // // // //     var c=10000;
// // // // // // // // //     let d=200000;
// // // // // // // // //     console.log("Function declaration")
// // // // // // // // // }

// // // // // // // // // fun();

// // // // // // // // // console.log(c);


// // // // // // // // //higher order functions

// // // // // // // // function callback(){
// // // // // // // //     console.log("I  am callback")
// // // // // // // // }

// // // // // // // // function higherOrder(cb=callback){
// // // // // // // //     // cb();
// // // // // // // //     return cb;
// // // // // // // // }

// // // // // // // // const result = higherOrder()
// // // // // // // // result()
// // // // // // // // //closures

// // // // // // // debugger
// // // // // // // function a(){
// // // // // // // let b = 100;
// // // // // // // return function(){
// // // // // // //     let a=200;
// // // // // // //     console.log(a+b)
// // // // // // // }
// // // // // // // }
// // // // // // // const result= a();
// // // // // // // result();

// // // // // // //Asynchronous JS

// // // // // // console.log("Start")
// // // // // // let count =0;

// // // // // // const id = setInterval(()=>{
// // // // // //     console.log("delay")
// // // // // //     count++;
// // // // // //     if(count == 2) clearInterval(id)

// // // // // // },1000)

// // // // // // console.log("end")

// // // // // // function fun(){
// // // // // //   console.log("fun")
// // // // // // }

// // // // // // fun();


// // // // // //Promises


// // // // // // pending resolved rejected

// // // // // setTimeout(()=>{
// // // // // console.log("time out")
// // // // // },0)

// // // // // const promise = new Promise((resolve,reject)=>{
// // // // //     setTimeout(()=>{
// // // // //       resolve("I am Resolved")
// // // // //       reject("I am Rejected")
// // // // //     },2000)
// // // // // })

// // // // // promise.then((res)=>{
// // // // //     console.log(res)
// // // // // })
// // // // // .catch(err=>{
// // // // //     console.log(err)
// // // // // })

// // // // // fetch('https://dummyjson.com/quo')
// // // // // .then(res =>{
// // // // //   // console.log(res)
// // // // //   return res.json()
// // // // // }).then(response=>{
// // // // //   console.log(response)
// // // // // }).catch(err=>{
// // // // //   console.log("I am error")
// // // // // })

// // // // // Async await 

// // // // async function asyncFun(){
// // // // const data = await fetch('https://dummyjson.com/quotes')
// // // // const result = await data.json();
// // // // console.log(result)
// // // // }

// // // // asyncFun()

// // // console.log("abc"==1)

// // // Destructuring

// // const arr = [10,20,30,40]
// // const [a,b=100,c,...res]= [10,,30,40,50,60]
// // console.log(a,b,c,res)

// const arr = [1,2,3,4,5]
// const brr =[...arr,100,200,..."abc"]
// console.log(brr)

const person = {
  name:"weekend",
  age:"30"
}
// const {name:a,age:b,city="nyc"} = person
// console.log(city,a,b)

const singer = {...person, city:"Delhi"}
console.log(singer)







