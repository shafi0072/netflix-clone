const apiKey = "9edf799fc51f239bfcb44f2c5334cd85";

const apiRequest = "https://api.themoviedb.org/3/movie/550?api_key=9edf799fc51f239bfcb44f2c5334cd85";

const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWRmNzk5ZmM1MWYyMzliZmNiNDRmMmM1MzM0Y2Q4NSIsInN1YiI6IjVmOGMzMjA1ZDA1YTAzMDAzN2RlOTRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BtSYil__gdFJRlTn__6IrapJu3AY_40vzuUNUr1i5to";

const request = {
    fetchTrending:`/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${apiKey}&with_genres=99`,
}

export default request