import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

    const posterUrl = movie.Poster && movie.Poster !== 'N/A'
        ? movie.Poster
        : 'https://via.placeholder.com/300x450?text=No+Poster';

    return (
        <Link
            to={`/movie/${movie.imdbID}`}
            className="block bg-gray-900/70 rounded-xl overflow-hidden shadow-2xl 
                 hover:shadow-[#66FCF1]/50 hover:scale-[1.03] transition duration-300 ease-in-out"
        >
            <div className="relative h-64 sm:h-80">
                <img
                    src={posterUrl}
                    alt={movie.Title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"></div>
            </div>

            <div className="p-4 text-left">
                <h3 className="text-xl font-bold text-[#C5C6C7] truncate hover:text-[#66FCF1] transition duration-200">
                    {movie.Title}
                </h3>
                <p className="text-sm text-[#45A29E] mt-1">
                    {movie.Year} &bull; {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
                </p>
            </div>
        </Link>
    );
};

export default MovieCard;