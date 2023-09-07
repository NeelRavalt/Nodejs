

const URL= "https://api.tvmaze.com/search/shows?q=girls"

const form = document.getElementById("form");

const result = document.getElementById("container");



//form submit kariya pachi data leva and referesh kariya vager page 
form.addEventListener("submit", (e)=>{

    e.preventDefault();  //aa akhu page refresh na kare

    //DOM manipulation

  // console.log(form);
  const searchtext = form.children[1].Value; 
  {console.log(searchtext);}
})

//

function getmovies(searchtext){

    axios.get(`${URL}${searchtext}`) //url and data pass thase
    .then((res)=>{
       
       // console.log(res.data)
       for( let moive of movies){
        if(moive.show.image !=null) //amuk jagiya ae image na hoy aene mate
      
      
      const image = document.createElement("img")
      image.setAttribute("src", moive.show.image.medium);
      result.append(image)
    }
    })
}



form.addEventListener("submit", (e)=>{

  e.preventDefault();

const searchtext = form.children[1].value;

console.log(searchtext);

removemovies(result)

getMovies(searchtext);

form.children[1].value = " "

})