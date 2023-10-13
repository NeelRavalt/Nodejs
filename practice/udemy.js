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
//     case 'b':
//     case 'B':
//         document.write('It is Vowel')
//     break;
    
//     case 'c':
//     case 'C':
//         document.write('It is Vowel')
//     break;
    
//     case 'd':
//     case 'D':
//         document.write('It is Vowel')
//     break;
//     default:
//         document.write('It is consonent')  
//     }


//................ How to create function in js
// function hello(){   document.write('your welcome') }
// hello()  //call the function

//.......................          ..... what is perameter and argument

// function hello(a,b) /* perameter*/{ 
//     document.write(a+b)}
// hello(1,2) //arguments


//....................make arrithmatic quvations use of function perameter and arguments
//...................problem take user input and make additiion uase of function
// function hello(a,b){ //perameters

//     document.write("Adition = "+(a+b) +"<br/>" )
//     document.write("Subtraction = "+(a-b) +"<br/>" )
// }
// var a = Number(window.prompt('enter value of a'));
// var b = Number(window.prompt('enter value of b'));
// hello(a,b) //arguments


//..................... Array ..................................
//......push pop... (add remove)............ array na last ma work kare
//.....shift unshift .....(remove add)..... array na first ma work kare 
//.length use for check length of array

//a = ['hi' ,'hello']
// a.push('km cho')
// document.write(a +"<br/>")
// a.pop()
// document.write(a +"<br/>")
// a.unshift('neel')          //add kare value ne first position ma
// document.write(a +"<br/>")
// a.shift()                  // remove kare first element ne array mathi
// document.write(a +"<br/>")

// document.write(a.length)