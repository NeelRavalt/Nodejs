//api + api key copy pate kari ne {} fill karo

const URL = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=70da3369b09d3c18e9555ec67caf378e";

//axios use kari sakay but te nodejs terminal ma dekhay aa browser ma dekhay "module" na lidhe

fetch(URL,{
    method: "GET",
})
// response and result ne .then ma use karvu.
//data ne lavva mate promise ma .then 2 var lagavu pade.
.then((response)=>{
    return response.json();
    //return response.text();
})


.then((result)=>{
    console.log(result)
})