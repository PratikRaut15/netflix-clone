const APIKEY = "6ad01e0bdf649bb637cc4a71932e96af";

const requests = {
    fetchTrending : `/trending/all/day?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv/?api_key=${APIKEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
    //fetchLatest: `/person/latest?api_key=${APIKEY}&language=en-US`,
    

};
//  // https://api.themoviedb.org/3/person/latest?api_key=<<api_key>>&language=en-US

export default requests; 