import axios from 'axios';

export const fetchTrendingMovies = async () => {
    const trending = [
        { Title: "Inception", Year: "2010", imdbID: "tt1375666", Type: "movie", Poster: "https://m.media-amazon.com/images/I/51s+2vXZZPL._AC_.jpg" },
        { Title: "The Dark Knight", Year: "2008", imdbID: "tt0468569", Type: "movie", Poster: "https://m.media-amazon.com/images/I/51EbJjl+3yL._AC_.jpg" },
        { Title: "Interstellar", Year: "2014", imdbID: "tt0816692", Type: "movie", Poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg" },
        { Title: "Stranger Things", Year: "2016", imdbID: "tt4574334", Type: "series", Poster: "https://m.media-amazon.com/images/I/71j7lVj+WfL._AC_SY679_.jpg" },
        { Title: "Breaking Bad", Year: "2008", imdbID: "tt0903747", Type: "series", Poster: "https://m.media-amazon.com/images/I/81sXhZ0u4OL._AC_SL1500_.jpg" }
    ];
    return new Promise(resolve => setTimeout(() => resolve(trending), 500));
};

export const fetchUserReviews = async (imdbID) => {
    const reviews = [
        { author: "John Doe", source: "IMDb", snippet: "Amazing movie with mind-bending plot!", score: "9/10" },
        { author: "Jane Smith", source: "Rotten Tomatoes", snippet: "Thrilling and visually stunning.", score: "92%" }
    ];
    return new Promise(resolve => setTimeout(() => resolve(reviews), 500));
};
