//***************************************************************************************
//JS NATURE AND QUESTIONS
//**************************************************************************************


// let a = [10,1];

// let b =[20,10];

// console.log(a[0]==b[1])    //o/p => true 
// console.log(a[0]===b[0])   //o/p => false

 

// let c=10;

// let d= false
// let dd= true

// console.log(c+d)    // o/p => 10
// console.log(c+dd)   // o/p => 11

 

// let e =[1,2,3,4,5,6,7,8];

// let f ={ name:"rahul"}

// console.log(...e)  array distructuring
-->// if we check the type of array would not change if do impliment the spread oprater

 

 

// let g= 10 - -10

// console.log(g)  // o/p 20

 

// const set =new Set([1,2,3,4,4,5,5,])

// console.log(set)   //array to obj

 

// let h={name:"rahul"}

// console.log(delete h)  if only h then false becoude var,let ,const cant be delete  but proprtties can when h.name then true output will be

 

// let i =["rahul","mehul","keyur","ganu"];

// let [...r]= i

// console.log(r)

 

// const info = { name: "rahul", age: 21, occupation: "backend engineer" };

// const detail = { email: 'ajdf@gmail.com', num: 7012983948 };

// var rrr = { ...info, ...detail };

// console.log(rrr); //merge 2 object

 

// const info = { name: "rahul", age: 21, occupation: "backend engineer" };

// const detail = { email: 'ajdf@gmail.com', num: 7012983948 };

// var rrr = { info, ...detail };

// console.log(rrr);  // o/p=> join both obj

 

// const result = null || {} || true

// console.log(result) // o/p will || take positive value first  thats means {} will i get

 

// if (false || true) {

//   console.log("i am true");

// } else {

//   console.log("i am false");

// } // o/p i m rahul



//**************************************************************************************
//**************************************************************************************



//--- javascript--for--of------
//dec:- also we can say this use to extrect from  {key:"value"} value from onj
//      but we *cant* directly extract value we need to Object.values(filedName) need to define
// const arr=["one","two","tree","four"]
// for(var num of arr){
// console.log(num)
// }
// console.log("this is distructuring->",...arr)

    /*o/p--> 1> one
                two
                tree
                four
                this is distructuring-> one two tree four*/



//--- javascript--for--in------
//dec:- also we can say this use to extrect {key:"value"} key from onj
// const number=["one","two","tree","four"]
// for(var key in arr){
// console.log(key +":"+ number[key])
// }
    /*o/p--> 2>0:one
               1:two
               2:tree
               3:four*/




//using map for adding fild into object
// const person =[{name:"rrr",lname:"patel"},{name:"jjj",lname:"nakr"}]

// let newPerson = person.map(x=>{
//   let newObj={};
//   newObj["middlename"] = x.name + " " + x.lname;
//   return newObj;
// })

// console.log(newPerson)




// convert string into array o/p['r','a','h'..]
// const ss="rahul"
// const rr=[...ss]
// console.log(rr)



//--------classes in javascript---
//dec:- classes are a way to define reusable blueprints for creating objects with similar properties and behaviors
// class gun{
//     constructor(name,brand){
//       this.name1=name,
//       this.brand1=brand
//     }
//      guninfo(){
//        console.log( `this gun name is ${this.name} and brand is
//        ${this.brand}`)
//       }  
//   }
//   const gun1= new gun("m24","apple")
 
//   gun1.guninfo()




//**************************************************************************************
//**************************************************************************************




//1
// const aa = []||0|| true
// console.log(aa)
//o/p => []


//2
//console.log(Promise.resolve(5))
// return promise fullfield


//3
// const aa = '{"name":"rrr","age":20}'
// const str=JSON.parse(aa)
// console.log(str.name)
//JSON parse do json string to js JSON object


//4
// in let and const you need to declate first than accece 
// {both are block level scope }


//5
// const name = 'this is name '
// console.log(!typeof name === 'object')
// console.log(!typeof name === 'string')
//return false false litel deep flow ! -> ===


//6
// const name='this'
// const a=20
// console.log(isNaN(name))   //true
// console.log(isNaN(a))      //false


//7
// const person = {
//   name:"rahu",
//   age:21
// }
//  Object.seal(person)
//  console.log('this is first ->',person)
//  person.name = 'jane'
//  delete person.age;
//  console.log('this is sec->',person)
// when you object.seal then you can delete but you can update cannot add new prop



//8
// if you want to remove first element from array then use arr.shift()



//9
// const ty= "true";
// console.log(typeof !ty )
//using only ! this to in typeof so we can boolean force value



//10
//map and forEach diffrence is map allways return 

//MAP FUNCTION---
// const arr=[1,2,3,4]
// const maap = arr.map((arr)=>
//   arr*2
// )
// console.log(maap)

//FOREACH FUNCTION----
//const numbers = [11, 22, 33, 44, 55];
// numbers.forEach(function (number, index) {
//   console.log(`Element at index ${index}: ${number}`);
// });
// array.function(callback(cv,index,value){
//   //ations
// })



//11
// let data=['one','two','three']
// delete data[1];
// console.log(data)
//o/p -> [ 'one', <1 empty item>, 'three' ]



//12
// let c=3**3       //this is 3^3---> o/p 27
// console.log(c)



//13
// let a =2
// setTimeout(()=>{
//   console.log("1->",a)
// },0)
//  a=100;
// here code excute by top to down line by line and first a = 2 then its see setTimeout that place a side even if it has 0 secound then a= 100 and after this it will be consider setTime out that is why out put is  {1-.100}



//14
// const 10A ='like';
// const A10 = 'okey';
// console.log(10A)
// rule in js variable allways start with string 



//15
// let a= 1
// let b= 2
// console.log(++a === b)
// console.log(--a === b)
//this is increment and decriment oprators that means ++a will be 2 and --a will be 0 



//16
// let a=1
// let b=1
// let c=2
// console.log(a=== b=== --c)
// this will leads to backend so becouse first it will compare the a and b that will true and then it will compare true and  --c that will leads to false   coz compare bool and number so

//just like below
// let a = 1
// let b = true 
// console.log (a === b)  //o/p false



//17
// UNdefine ==> you have declare but not place the value
// NOTdefine ==> you havent declare and try to access



//18
// console.log([[[[[]]]]])
// this will be return the nestaed array 




//19
// for( var i=0; i<3;i++){
//   setTimeout(()=>console.log(i),1)
// }  // o/p---> 3 3 3

//when ever v use the settimeout or interval then js place this to diffrent stack and execute after the evry thing runs or after the seted time so what heppen here,,,
//first for loop execute untill condition false and then var i become 3 and after thissettiem execute and print the 333

// for( let i=0; i<3;i++){
//   setTimeout(()=>console.log(i),1)
// }  o/p 0 1 2 becouse of let that is block-scope



//20
// const a = +true
// console.log(typeof +true)
//when you add + infrond of any value that become number 




//===================== tcs interview Quetion ======================
// function calculateSel(job) {
//   var income = 5;
//   // Initial value of income is set to 5

//   if (job) {
//     var income = 50; 
//     // If job is truthy (e.g., true), income is set to 50
//   } else {
//     var income = 500; 
//     // If job is falsy (e.g., false), income is set to 500
//     {
//       var income = 5000; 
//       // This block is not executed as it is inside an invalid code 
         // block, so it has no effect
//     }
//   }

//   return income; // Return the value of income
// }

// console.log(calculateSel(true)); 
// // Call the function with true as the argument and log the result final ans will --> 50









//--------------------16june23----------------------------------------------------------Coding questions and answers-----------------------------------------------------//





//find duplicate and left them alone
                  //  let array =[1,2,3,3,2,4,5,6,1]
                    // let duplicateNumber = array.filter((ele,index,arr)=>array.indexOf(ele)!=index)
                    // let another = array.filter((ele,index,arr)=> array.indexOf(ele)!=index)

                    // console.log(another)

                  //map the function
//                     let mappedArray = array.map((arr)=>arr*2)
//                     console.log(mappedArray)



// find max and min number into array
//                 let array =[4671,2321,3365,43,222,212,554,623,1301]

//                 function maxVal(arr){
//                     return arr.reduce(function(pre,cur){
//                         //return pre<cur?pre:cur  //small number
//                         return pre>cur?pre:cur  // ternary conditional operator (?:)
//                 })
//                 }
//                 console.log(maxVal(array))
// 
//find max and min number into array using for loop
                // let array =[2321,3365,43,222,212,554,4671,623,1301]
                // function maax(arr){
                //   let max=arr[0]
                //   let secoundMax= -Infinity
                //   for(let i=0;i<arr.length;i++){
                //        if(arr[i]> max){
                //         secoundMax=max
                //        max = arr[i] 
                //       }else if(arr[i]>secoundMax && arr[i] < max){
                //          secoundMax = arr[i];
                //       }
                //   }
                //   return {max ,secoundMax}
                // }
                // console.log(maax(array))



  //find secound highest value
    // 1> find max value then Delete the index
    // 2> reimpliment the same value

                // let array1 =[4671,2321,3365,43,222,212,554,623,1301]

                // function maxVal(arr){
                    
                // let max = Math.max(...arr);
                // let index= arr.indexOf(max)
                // arr.splice(index,1)

                // let SecMax = Math.max(...arr);
                //         //return max
                // return SecMax
                // }

                // console.log('max value is-->',maxVal(array1))      
                
                

 
                
  //filter and find both are diffrent 
    //.Filter() ==> will search with given condition and give all matcj
    //.find()   ===> also search with condition but it will match the only first given match
//             const objArray=[
//                 {name:"n1",age:20},
//                 {name:"n2",age:21},
//                 {name:"n3",age:22},
//                 {name:"n4",age:23},
//                 {name:"n5",age:24},
//             ]
//             const r= objArray.filter((item)=>{
//                 return item.age>20
//             })
//             console.log(r)      
//            

  //for finding missing value from array(sorted) then
        // 1> in the function find min and max value from the array 
        // 2> also  run the for loop that sort the indexwith <0 and if miising then gives -1 else give same element 


          //-------------------
                // const array= [1,2,3,4,5,6,9,10,11,15]
                // const missEle =[]

                // function missValue(arr){
                //     const max = Math.max(...arr)
                //     const min = Math.min(...arr)

                // for(let i=min;i<max; i++){
                //     if(arr.indexOf(i)<0){
                //         missEle.push(i)
                //     }
                // }
                // return (missEle)
                // }

                // console.log(missValue(array))


         //----------------------

         
                // const array = [51, 52, 53, 55, 59, 60, 62];
                // const Dummy = [];

                // function miss(arr) {
                // const max = Math.max(...arr);
                // const min = Math.min(...arr);

                // for (let i = min; i < max; i++) {
                //     if (!arr.includes(i)<0) {
                //     Dummy.push(i);
                //     }
                // }

                // return Dummy;
                // }

                // console.log(miss(array));


// get even and odd number from the array
            const number =[7,55,1,2,6,9,8,2,3,4,85]
            
            function gnretEven(arr){
                const even =arr.filter((ele)=>ele%2===0)
                const odd =arr.filter((ele)=>ele%2===1)
                return 'this are even '+ even +'and this are odds'+odd
            }

            console.log( gnretEven(number))  


      
/* 
      //How to find the sum of all elements in array  
                  const arr=[11,44,553,22,5]

                  function sumAll(a){
                     let final = a.reduce((pre,cur)=>{
                          return pre+cur
                      })
                      console.log(final)
                  }
                  console.log(sumAll(arr))
                  // Find fectorial of any number 
  
  
  
  
      //Fectorial the number 
           // take number and chech is mmore the 0
           // make logic that multiply by numbe that start from 1 and end till what ever you takes numberfrom user 
  
              const takeNumber= prompt('enter the number that you want to fectorial')
              var fect=1
              if(takeNumber<0){ alert("i cant fectorial becouse this is lesser then 0")}else{
                  for(i=1;i<=takeNumber;i++){
                      fect=fect*i
                  }
              alert(`Fectorial of ${takeNumber} is   -->${fect}`)
              }
         
              
  
  
          //check prime number or not                   
                      const takeNumber = prompt("Enter the number")
  
                      if(takeNumber==1){
                          alert("cant set 1 for checking the prime number")
                      } else if(takeNumber<0){
                          alert(" checking the prime number  foe negetive value")
                      }else{
                          for(i=2;i<takeNumber;i++){
                              if(takeNumber%i==0){
                                  var result = ` BOOM its prime ${takeNumber}`
                              }else{ var result = `oops its NOT prime ${takeNumber}`}
                          }
                      
                          console.log(result)
                      }
  
  
          //check your name containt vowels or not
  
  
              const takeName = prompt("enter name ok")
              const string = takeName.toLocaleLowerCase()
  
              if(string=='a'||string=='e'||string=='i'||string=='o'||string=='u'){
                  console.log("your name has vovels")
              }else{ console.log("your name dont have vovels ")}
              
              //method 2
              //count the name how many vowles contains
              
              const takeNam = prompt("enter name ok")
              const vowels =['a','e','i','o','u']
              function countVowel(str){
                  var count =0;
                  for(let letter of str.toLocaleLowerCase()){
                      if(vowels.includes(letter)){
                          count++
                      }
                  }
                  return count
              }
  
              console.log( `you have enter ${takeNam} and your name has vowel count --> `,countVowel(takeNam))




    // reverse the given strinng                             -->//RRR

                    const takeStr = prompt(`give me name that you want to recverce`);

                    function vStr(arr) {

                            const splitArr = arr.split(""); 
                            const reverseArr = splitArr.reverse(); 
                            const joinedStr = reverseArr.join(""); 
                            return joinedStr;
                    }

                    console.log(vStr(takeStr));
            
        //find palindrome string  that means 'eye' is palindrom that means reverce of eye is also b eye       -->//RRR

                    const takeStr = "concat"

                    function checkPali(str){
                        
                                const spread = str.split("")
                                const  rev = spread.reverse()
                                const revJoin = rev.join("")
                                if(revJoin==str){
                                console.log('this string is palindrome')
                                }else{
                                console.log('this string is not')
                                }    
                    }
                    console.log(checkPali(takeStr))


        // swapping without third variable                          -->//RRR
                                
                    let a=1
                    let b=2;

                    //this is third var 
                    let temp=a;
                    a=b
                    b=temp;

                    //without third var

                    [a,b]=[b,a]

                    console.log(a+"and"+b)


        //find the factors of given intiger                         -->//RRR

                     const sendInt = prompt("enter the number that you want to find fectors!!!")
                     
                    function findFact(fac){
                        var arr=[]
                        for(i=2;i<fac;i++){
                            if(fac%i==0){
                            arr.push(i) 
                            }
                        }
                        if(arr.length===0){
                            console.log("your intiger has no factor")
                        }else{
                            console.log(`your int ${fac} has ${arr.length} factor`)
                        }

                        return arr
                    }

                    console.log(findFact(sendInt))


      

        //Compare two array with each other                            -->//RRR
                    const aa = [1, 2, 3, 4, 5, 6];
                    const bb = [5, 8, 7, 9, 6, 4];

                    function isSameArray(a, b) {
                    if (a.length !== b.length) {
                        console.log("Your arrays are not the same (different lengths).");
                        return false;
                    }

                    for (let i = 0; i < a.length; i++) {
                        if (a[i] !== b[i]) {                    //compare index
                        console.log("Your arrays are not the same (different values).");
                        return false;
                        }
                    }

                    console.log("Your arrays are the same.");
                    return true;
                    }

                    console.log(isSameArray(aa, bb));



        // inter sec two array  what ever is comen that wil display        -->//RRR
                    const aa = [1, 2, 3, 4, 5, 6];
                    const bb = [5, 8, 7, 9, 6, 4];

                    function interSection(a,b){
                    const o =[]
                        for(i=0;i<a.length;i++){
                        if (b.includes(a[i])) {               //check index with value
                            o.push(a[i]);
                        }
                        }
                        return o
                    }
                    console.log(interSection(aa,bb))



      //Make first latter to Capital                                      -->//RRR

                    const enterName = prompt("Enter name")
                    function Upp(Name){
                    var Name =enterName.toLocaleLowerCase();
                    var Uname=Name.slice(0,1)
                    var final =Uname.toLocaleUpperCase();
                    var Sname=Name.slice(1,Name.legnth)
                    var join= final+Sname
                    return join
                    }
                    console.log('this is your final string--->',Upp(enterName))



                    //optimized-------------GPT


                    const enterName = prompt("Enter name");

                    function Upp(name) {
                    const modifiedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
                    return modifiedName;
                    }

                    console.log('This is your final string --->', Upp(enterName));

        //Fibonaki

             const getnum=50
                    var a=0
                    var b=1

                    for(i=0;i<getnum;i++){
                    temp=a+b;
                    b=a;
                    a=temp;
                    console.log(temp)
                    }

        //print left side start
                     for(i=1;i<=6;i++){              *
                         let row=""                  **     
                         for(j=1;j<=i;j++){          ****
                             row +='*'               *****
                         }
                        console.log(row)
                        }    
                        
        //printing triangle start
                  for(i=1;i<=6;i++){    
                     let row="";       
                     for(k=1;k<=6-i;k++){                 *
                            row+=" "                      **
                        }                                ****
                    for(j=1;j<=i;j++){                  ******
                            row +='*'               
                        }
                    console.log(row)
                    } 
        
 `      // check occurenc of latter
   
                    const takeStr =prompt('give me sstring')
                    const ltr = prompt('give me the later that you want to find ')

                    var count=0
                    for(i=0;i<=takeStr.length;i++){
                    
                        if(takeStr[i]==ltr){
                            count++
                        }
                    }
                    
                    console.log(`you have entered -> ${takeStr}  letter for search is ${ltr}  count is ${count}`)           
        // make function for printing table 
   
                        const takeNum =prompt('give me num')
                        const TNL=takeNum.length

                        function Gtabel(T){
                            var table = []
                            for(i=1;i<=10;i++){
                                var count = T*i
                                table.push(count)
                            }
                            return table
                        }
                        console.log(`table is ->`, Gtabel(takeNum) )


*/