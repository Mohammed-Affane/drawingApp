const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const main=document.querySelector('.main')
    const form=document.getElementById('form');
    const inputSearch=document.querySelector('input');




getMovies(APIURL);
async function getMovies(url){
  
  const resp=await fetch(url);
  const response=await resp.json();
  const movies=response.results;

  showMovies(movies);

  
}

function getClassByVote(vote){

  if(vote>=8){

    return 'green';
  }
  else if(vote>=5){
    return 'orange';
  }
  else{
    return 'red';
  }

}


form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const inputValue=inputSearch.value;
  if(inputValue){
    getMovies(SEARCHAPI+inputValue);




    inputSearch.value='';

  }
  
  
})

async function showMovies(movies)
{

  main.innerHTML='';


    

  movies.forEach(movie => {
    const {poster_path,title,vote_average,overview}=movie;

    const moviEl=document.createElement('div');
    moviEl.classList.add("movie");
    
    moviEl.innerHTML=`

    <img src="${IMGPATH+poster_path}" alt="${title}" >
<div id="movie-info" class="movie-info">
    <h3 class="movie-title">${title}</h3>
    <span class='${getClassByVote(vote_average)}'>${vote_average}</span>
    </div>
    <div class="overview">

    <h3>Overview</h3>

   ${overview}

    </div>
    
    
    `
    main.appendChild(moviEl);

});

}
