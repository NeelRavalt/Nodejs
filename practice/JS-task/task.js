//1. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.


// var a = (window.prompt('enter alphabet'));
// switch(a){
//     case 'a':
//     case 'A':
//         alert('It is Vowel')
//     break;
    
//     case 'e':
//     case 'E':
//         alert('It is Vowel')
//     break;
    
//     case 'i':
//     case 'I':
//         alert('It is Vowel')
//     break;
//     case 'o':
//     case 'O':
//         alert('It is Vowel')
//     break;
//     case 'u':
//     case 'U':
//         alert('It is Vowel')
//     break;
//     default:
//         alert('It is consonent')  
//     }






//2. function that accepts a string as a parameter (argument) and converts the first letter of each word of the string in upper case.
            //Example string : 'the quick brown fox' 
            //Expected Output : 'The Quick Brown Fox'

            // function capital(inputString) {
            //    // Split the input string into words using space as the delimiter
            //    const words = inputString.split(' ');
             
            //    // Iterate through each word and capitalize the first letter
            //    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
             
            //    // Join the capitalized words back together with spaces
            //    const result = capitalizedWords.join(' ');
             
            //    return result;
            //  }       //.....................................................................
            

            // let nam =  'the quick brown fox' ;
            // document.write(nam + '<br/>');
            
            // let firstWorld = (Str) => Str.charAt(0).toUpperCase()   
            //                         + Str.slice(1).toLowerCase();
    
            // let final = (Str) => Str.split (" ")
            //                     .map(firstWorld).join (" ");
    
            // document.write(final(nam)); 
       
            
            //  // Example usage:
            //  const inputString = 'the quick brown fox';
            //  const outputString = capital(inputString);
            //  document.write(outputString); // Output: 'The Quick Brown Fox'
             

// function hello(a){ //perameters .............
//     document.write(a.toUpperCase ()); 
// } 
//    var a = window.prompt('enter your string');
//     hello(a) //arguments .....................


//3. program to get the current date. ..............................................................................
//Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
 
// FOR DATE use d.getdate (), for month = d.getmonth()+1 , for year = d.getfullyear()

//  const d = new Date();
//  var month = d.getMonth()+1;
// document.write( d.getDate()+ "-" + month + "-" + d.getFullYear());


//4. Write a JavaScript program to calculate number of days left until next Uttrayan........................................



//5. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
// index.html ma che



// 7. Write a simple JavaScript program to join all elements of the following array into a string.
//var Input = ["Red", "Green", "White", "Black"]; 
// Expected Output : 
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

//document.write(Input.toString());



// 8. Write a JavaScript program to sort the items of an array.......................................
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]; 
// Sample Output : -4,-3,1,2,3,5,6,7,8 

//let array =[3, 8, 7, 6, 5, -4, -3, 2, 1  ]  //incresing order
// array.sort (function(a,b){return a-b});
//     alert(array);
// array.sort (function(a,b){return b-a});     //decresing order
//     alert(array);



//.............  problem 2 take input from user and store value in array and perform upper task...................
// const valuesArray = []; // Step 1: Create an empty array

// while (true) { // Use a loop to get values until the user cancels
//   const userInput = prompt("Enter a value (or cancel to finish):");

//   if (userInput === null) {
//     break; // Exit the loop if the user cancels
//   } else {
//     valuesArray.push(userInput); // Step 3: Add the input to the array
//   }
// }
// document.write("Values entered by the user:");
// document.write(valuesArray); // Display the array with the entered values


// 9. Write a JavaScript program to display the colors in the following way :
// Here is the sample array: 
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
// o = ["th","st","nd","rd"] 
// Output 
// "1st choice is Blue ." 
// "2nd choice is Green." 
// "3rd choice is Red." ...


// 10. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output : 
// "0 is even" 
// "1 is odd" 
// "2 is even" 
// let n = Number(window.prompt('enter total number'));
// for(i=0;  i<=n ; i++){
// if (i%2 == 0){document.write ( i+' is even ' +"<br/>")
// }
// else{
//    document.write(i+' is odd ' +"<br/>")
// }
// }

// 11. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
// Sample numbers : -5, -2, -6, 0, -1 
// Output : 0
 //document.write(Math.max(-5 , -2, -6 , 0, -1));

// 12. Write a JavaScript function to get difference between two dates in days.
// done .........

// 13. Write a JavaScript function to count the number of days passed since beginning of the year.
// function daysPassedSinceStartOfYear() {
//     const today = new Date();
//     const startOfYear = new Date(today.getFullYear(), 0, 1); // January is month 0

//     const timeDiff = today - startOfYear;
//     const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

//     return daysPassed;
// }

// const daysPassed = daysPassedSinceStartOfYear();
// document.write("Days passed since the beginning of the year: " + daysPassed); // You can also use alert or document.write to display on the page.


// 14. Write a JavaScript program to calculate age.


// 15. Write a JavaScript function to get time differences in days between two dates.

//16. Write a program for calculator.