import React from 'react';

const genres = ["Action", "Adventure", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Thriller"];

const GenreNav = ({ onGenreSelect }) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 my-6">
            {genres.map(genre => (
                <button
                    key={genre}
                    onClick={() => onGenreSelect(genre)}
                    className="px-4 py-2 bg-gray-800 text-[#C5C6C7] rounded-full hover:bg-[#45A29E]/30 hover:text-[#66FCF1] transition duration-200"
                >
                    {genre}
                </button>
            ))}
        </div>
    );
};

export default GenreNav;
