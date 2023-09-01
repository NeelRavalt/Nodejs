

const URL= "https://api.tvmaze.com/search/shows?q=girls"

const form = document.getElementById("form");

const result = document.getElementById("container");



//form submit kariya pachi data leva and referesh kariya vager page 
form.addEventListener("submit", (e)=>{

    e.preventDefault();  //aa akhu page refresh na kare

    //DOM manipulation

  // console.log(form);
  const searchtext = form.children[1].Value; 
  console.log(searchtext)
})



function getmovies(searchtext){

    axios.get(`${URL}${searchtext}`)
    .then((res)=>{
        console.log(res.data)
    })
}