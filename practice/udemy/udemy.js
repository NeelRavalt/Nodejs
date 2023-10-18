// JS Case Sensitive che  name & NAME alag alg define kari sakay
//  Name = "neel";
//  nAme= "nilay";
// document.write(Name + "<br>")
// document.write(nAme)

//Prompt
// user= window.prompt("enter your name")
// document.write("hi, your name is  " +user)

//.................operator.......................
          //Arithmetic Operator
// var a=10;
// var b=20;
             // for user input
// var a= Number(window.prompt("Enter value of a"));  //number input hovathi agad Number lakhvu pade
// var b= Number (window.prompt("Enter value of b"));

// document.write(a+b);
// document.write("<br>")
// document.write(a-b);
// document.write("<br>")
// document.write(++a + b);  //11+20 = 31
// document.write("<br>")
// document.write(--a + b); // 10+20 = 30

         //Comparision Operators

//  aa nadha no use authentication ma thay login form ma
// document.write(a==b)
// document.write("<br/>")
// document.write(a!=b)
// document.write("<br/>")
// document.write(a>b)
// document.write("<br/>")
// document.write(a>=b)
// document.write("<br/>")
// document.write(a<b)
// document.write("<br/>")
// document.write(a<=b)

             //Logical Operator

//  useid && pasworld true then logine to page
// document.write((a<b) && (a>b) ) //true &&true = true otherwise false
// document.write("<br/>")
// document.write((a>b) || (a>b)) //false || false = false otherwise True

           // assignment operators +=, -=, /=, *=, %=  

//  var a=10;
//  a += 1  // a<=1+10 
//  document.write(a)
//  a+= 1     //11+1= 12
//  document.write(a)
// a-= 2      //12-2 = 10
// document.write(a) 

//const var let  
// var global scope che
// const x = 3;
//  x=2
//  console.log(x)  //value not updated constant you can not change value
 
//  function abc= () =>
//  {
//     // let a=1;  local scope che 
//     console.log(a)
//  }

//primitive and non-primitive datatypes
// Primitive = (sun boon) string, number, boolean, undefined, null
// non-primitive = (Aao) Object, array, 

  //...................Type casting in javascript ................................
      //  Implicit & explicite

//implicit     "num" - num -> num , "num"* num -> num, "num"/num -> num
        //   "string" - "string" -> NAN , "num string" - "string" -> NAN         
       
       
        //  document.write("10"- 10 +"<br/>") 

        //  document.write("10"+10 +"<br/>")        

        //  document.write("10"/10 +"<br/>")        
                 
// document.write("neel 12" - "neel"+"<br/>") //NAN 
// document.write("hello " + "neel") hello neel

//..........................Explicit................................
// ----> String to Number => Number
// ----> Number to String => String
// ----> Boolean to Number => Number
// ----> Number to Boolean => Boolean

// var a= "1";
// var b="2";
// var A= Number(a)           //sring to number conversion
// var B= Number(b)
// var c= String(B)
// document.write(typeof(c))  //number to string 

// document.write(typeof(A) +"<br/>")
// document.write(typeof(B) + "<br/>")
// document.write(A+B +"<br/>") 
// document.write(a+b) //concatination thase string nu

// var num = 32
//number to bolean and bolean to number
// document.write(Number(true)+"<br/>")
// document.write(Boolean(0)+"<br/>")  //0 = false &  1 = true

//.........................if else statement.......................
//....................problem 1......... number input give by user and check number is odd or even

// var A= Number(window.prompt('enter your number'));
// if (A%2==0)  {document.write('The number is even')}
// else {document.write('The number is odd')}

//....................problem 2 if else ................
// var B = Number(window.prompt('enter your marks'));

// if (B>70) {document.write('You are qualified this exam congratulations' +"<br/>" +"Party kab he")}
// else {document.write('Better luck next time' +"<br/>" + "ho jayega pass recheking me de")}

//...................problem 3................ else if statement (multiple condition you can use like if)
// if marks ==100 grade is A+
// if marks >== 90 grade is A
// if marks >==80 grade is B
// if marks >== 70 grade is C
// if marks >==60 grade is D
// Otherwise you are fail 

// var a = Number(window.prompt('enter your marks'));
// if(a ==100 ) {document.write('A+')}
// else if (a>=90) {document.write('A')}
// else if (a>=80) {document.write('B')}
// else if (a>=70) {document.write('C')}
// else if (a>=60) {document.write('D')}
// else { document.write('you fail in this exam')}

// .....  ............  switch statement .........
//............. problem 4 ..............
    // user input cheack alpha bet vowel or not

// var a = (window.prompt('enter alphabet'));
// switch(a){
//     case 'a':
//     case 'A':
//         document.write('It is Vowel')
//     break;
    
//     case 'e':
//     case 'E':
//         document.write('It is Vowel')
//     break;
    
//     case 'i':
//     case 'I':
//         document.write('It is Vowel')
//     break;
//     case 'o':
//     case 'O':
//         document.write('It is Vowel')
//     break;
//     case 'u':
//     case 'U':
//         document.write('It is Vowel')
//     break;
//     default:
//         document.write('It is consonent')  
//     }


//................ How to create function in js ..................................................
// function hello(){   document.write('your welcome') }
// hello()  //call the function

//........................best method of use arrow fun without return key word..................................
//       //   ...................mrthod 1.... { aa braket ma retun lakhvu pade}..............................
// const two = (num1, num2)=>{
//     return num1 + num2         //aa retun key word ne replace kari ne lakhva mate method 2 no use karvo
// } 
//  var first= Number(window.prompt('enter value (num1)'));
//  var second=  Number(window.prompt('enter value (num2)'));
// document.write(two(first, second))

//........best method.............. method 2 ....(aa beaket ma direct perform kari sako)........................
//  const two = (num1, num2)=>( num1 + num2 )       
 
//  const two = (num1, num2)=>( {username: "neel"} )   // object mate     
 
//  var first= Number(window.prompt('enter value (num1)'));
//  var second=  Number(window.prompt('enter value (num2)'));
// document.write(two(first, second))


//.................... ..... what is perameter and argument  ................................................

// function hello(a,b) /* perameter*/{ 
//     document.write(a+b)}
// hello(1,2) //arguments


//....................make arrithmatic quvations use of function perameter and arguments
//...................problem take user input and make additiion uase of function
// function hello(a,b){ //perameters .....................................

//     document.write("Adition = "+(a+b) +"<br/>" )
//     document.write("Subtraction = "+(a-b) +"<br/>" ) }
// var a = Number(window.prompt('enter value of a'));
// var b = Number(window.prompt('enter value of b'));
// hello(a,b) //arguments ............................................

// nothing returned and less arguments .............................................
// function sam1(num1 , num2){
//     document.write(num1);  //30
//     document.write(num2);}  //undefined

//  document.write(sam1(30)); //kuch nhi return horha //undefined



// default parameterised functions
// function sam2(num1 , num2 = 40){ // default parameter
//     document.write(num1);  
//     document.write(num2);  
// }
// sam2(20);
// sam2(20,50); 



//..................... Array ..................................
//......push pop... (add remove)............ array na last ma work kare
//.....shift unshift .....(remove add)..... array na first ma work kare 
//.length use for check length of array
// slice method (1 , 4) [1,2, 3] sudhi lese and original array ma [1,2,3,4]  rakhse
// spice method (1 , 4) [1,2, 3,4] sudhi consider karse and original array ma [1,2,3,4]  delete kari dese

//a = ['hi' ,'hello']
// a.push('km cho')
// document.write(a +"<br/>")
// a.pop()
// document.write(a +"<br/>")
// a.unshift('neel')          //add kare value ne first position ma
// document.write(a +"<br/>")
// a.shift()                  // remove kare first element ne array mathi
// document.write(a +"<br/>")

// let arr= [1,2,3,4,5]
// let arr1= arr.slice(1,3)      //[1,2 value lese 3 delete]
// document.write(arr1 +"<br/>");
// document.write(arr +"<br/>");  //actual array ma koi update nahi thay

// let arr2= arr.splice(1,3)
// document.write(arr2 +"<br/>");
// document.write(arr +"<br/>");

//................................ variable to array store ...................................
// let a = 100;
// let b= 200;
// let c = 300;
// document.write(Array.of(a, b,c));
// console.log(Array.of(a, b,c));

// document.write(a.length)
//........................... Reverse Array ..............................................
//  let arr2 = ['sam' , 'mohd' , 'hardik'];
// document.write (arr2.reverse()+"<br/>");
//  document.write(arr2);


//.....................math function...........................................................
// document.write(Math.PI);
// document.write(Math.E);
// document.write(Math.LN2);
 //document.write(Math.sqrt(25));

 // document.write(Math.min(12,4,5,10,8,19));
// document.write(Math.max(12,4,5,10,8,19));

// document.write(Math.round(1.5));
// document.write(Math.round(10.49999999));
//document.write(Math.round(10.54));

// document.write(Math.ceil(10.00000009)+"<br/>"); //give nearest upper value
// document.write(Math.floor(10.99999)+"<br/>");   //give nearest lower value bhale .99 hoy toy te increment nahi kare
// document.write(Math.ceil(5.1)+"<br/>");         //give nearest upper value bhale .11 hoy
// document.write(Math.floor(5.55)+"<br/>");   //give nearest lower value
 //document.write(Math.abs(-5.55)+"<br/>");   //give negative to positive value (- to + me conversion)


// let random = Math.random() * 10 ;  //.....0 to 1 ke under hi math.random generate karse
// document.write(Math.floor(random)+"<br/>");

// let ans = Math.floor(Math.random() * 6 + 22) ; 
// document.write(ans);

// ............................................ ARRAY METHODS LIKE FOREACH, MAP, FILTER, ..............................
// forEach() --> methods (array).....................................................

//  let students = ['apple ', 'pineaaple ' , 'grape ' ,  'mango ', 'guava'];

//  students.forEach(function(item){
//      document.write(item) })

// students.forEach(function(sachin , manish){
//     document.write(`index was ${manish} --> juice was ${sachin}`)
// })



// map() method  --> array

// let marks = [10, 15, 18, 9, 28, 12, 5, 40];

// let newMarksArray = marks.map(function(item , index){
//     return [ item*2 , index ];
// })
// console.log(marks);
// console.log(newMarksArray);


// filter() method --> array
// let marks = [1,2,3,4,5,6,7,8,9,10];

// let filteredArray = marks.filter(function(item,index){
//     if(item >= 5){
//         // console.log(index)
//         return true;
//     }
//     return false;
// })
// console.log(marks);
// console.log(filteredArray);

// sort() 
// let arr = [16,12, 2, 34, 3, 88, 90, 36, 76];
// // let arr = ['sam' , 'samarth' , 'aryan' , 'aarav' , 'ayush' ,'AArav','Ayush'];
// let newArray = arr.sort(function(a,b){
//     return a-b; //asc
//     // return b-a; //desc
// });
// console.log(newArray);


//.................................... OBJECT + THIS keyword   ........................................
// arrow fun ma this key word na chale

// using this keyword object mathi data laine add karvu
// let obj2 = {
//     naam : 'sam',
//     naam: 'neel',
//     evs : 90,
//     cn  : 90,
//     web : 100,
//     maths :  10,
//     total : function(){    //methods
//         return (this.evs + this.cn + this.web + this.maths);
//     },
//     bulao : function(){
//         return (`${this.naam} ko bulao`)
//     }
// }

//document.write(obj2.total()  +"<br/>");
// document.write(obj2.bulao());

//.............. problem 2 of object ........................
// let obj3 = {
//     naam : 'sam',
//     naam: 'neel',
//     type1 : 'pen',
//     type2  : 'tv',
//     type3 : 'toy',
//     type4 :  'book',
//           item: function(){
//            return ( this.type1  +" " + this.type3) +"<br/>"},
//           neel: function(){
//            return ( this.type1 +' neel pase che' + " " + this.type3)}
// }
// document.write(obj3.item());
// document.write(obj3.neel());

//....................................... SCOPE .{scope}.............................
//.................... global scope .........................
// var b = 10;
// function fun(){
//     let b =11;    //var value updated
//     document.write(b +"<br/>") ;}  //block value .................... 
//         fun();
// document.write(b);                //global value ...............................

//.......................... block scope .....................
// if (true) {
//     let blockVar = "I'm a block-scoped variable";
//     console.log(blockVar);
//   }
  
  // Trying to access blockVar outside the block will result in an error
//   console.log(blockVar); // Error: blockVar is not defined
  

//..................................... HOSTING ..........................................................
// (when you access a varibale/function even before its declaration that variable is called hoisting )

// console.log(a);  //accessing a variable  ans= undefined
// meraFunc();  //accessing a function

//function declaration
// function meraFunc(){
//     console.log('inside mera function')
// }
//variable declaration
//var a = 20;  //undefined
//let a =12;// not define error throw karese


// .....................IIFE ...();........................................................................................
//.........Immediately Invoke Function Expression ......

// (       function neel(){
//     document.write(`DB CONNECTED`);} 
// ) ()

// (      (NAME)=>{
//     document.write(NAME +" "+ 'DB CONNECTED');} 
// ) ('NEEL') 

