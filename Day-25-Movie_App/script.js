const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7b7d4e0a6f61cea739b54315ea49dc03&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=7b7d4e0a6f61cea739b54315ea49dc03&query="'



const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


//movies
getMovies(API_URL)


async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML= ''

    //adding api

    movies.forEach((movie) => {
        const {title, poster_path, vote_average, overview} = movie

        const movieEL = document.createElement('div')
        movieEL.classList.add('movie')
        movieEL.innerHTML=`
            <img src="${IMG_PATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEL)
    })
}
//rating color

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'blue'
    }else if (vote >= 5){
        return 'green'
    }else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
      
    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm)

        search.value=''
    }else {
        window.location.reload()
    }
})