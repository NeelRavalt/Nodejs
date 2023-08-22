const fs= require("fs");

function cb (err, data){   //err and data reqired argument che, complesory che

if(!err)
{console.log(data)}

else{
console.log(err)
}
}
fs.readFile("hello.html", "utf-8", cb)     //hello html filr ne read kare