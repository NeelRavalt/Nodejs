 const fs= require("fs");   //lakhvu pde nahi tr undefine

// function cb (err, data){   //err and data reqired argument che, complesory che

// if(!err)
// {console.log(data)}

// else{
// console.log(err)         
// }
// }
// fs.readFile("hello.html", "utf-8", cb)     //hello html filr ne read kare, cb = callback
                        // event loop ma que ave   quew ma fifo lage so je value insert first thay te first out thay

          // callback function perform with example
let count = 0;
function cb(err,data){
count+=1;

if(count <=5){    //for loop ma ans change thai jay callback asynchronous value ne stack ma nahi revade aa badhi value asyn kevay i=1,2 ..  
    if(!err){
    console.log(data)
}
}
fs.readFile("hello" + (count + 1)+ ".html", "utf-8", cb)
}
fs.readFile("hello1.html", "utf-8", cb)