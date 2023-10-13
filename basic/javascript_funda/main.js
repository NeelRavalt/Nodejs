

// Rest parameter

// function add(a,b, ...arr){
//                                        // ...argument last maj lakhay
//      console.log(arr);
//     const result = arr.reduce((sum,curr)=> sum + curr,0)

//       console.log(result)

//  return a + b;
// }

// // console.log(add(1,2,3,4,5,6,7,8,9))


// // spead operator/syntax

let arr = [1,2,3,4,5,6,7,8,9,10];   //array mathi badhi value kadhva(spread karva)

//let arr1 = [...arr];

 //let obj = { ...arr}         //object ma pn chale 

 //console.log(obj)

 //console.log(arr1)


//console.log(...arr);

 console.log(Math.max(20, ...arr,10))





// Destructuring of Arrays, Objects     //array mathi amuk value kadhva use thay index 0 thi chalu thase

// let arr1 = ["new delhi", "agra", "chandigarh", "mumbai", "bangalore"];

// const [city1,,,city4,city5] = arr1;    //value ne variable ma store karo pachi access karo

// console.log(city1,city4,city5)


// error handling in javacript

// try{   //aani under fetch data karvo jo err ave to catch ma jse code akho crase nahi thay

//     console.log("hello world");

//     console.log("my name is naman")


// }

// catch(err){    

//     console.log("error aagya hai")

//     }


// try{

//     setTimeout(()=>{

//         cdcdnjcndjcnjdncjdc

//     },2000)

// }

// catch(err){

//     console.log("error aagya")
// }

// setTimeout(()=>{

//     try{

//         cdcdcdcdcdcdc;
//     }

//     catch(err){

//         // console.log("error")

//         throw new Error("ek error aagya")
          //throw new syntaxError ("ek error aagya")
          //throw new referesError("ek error aagya")
//     }
// })