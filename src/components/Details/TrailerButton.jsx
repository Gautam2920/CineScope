import React from 'react';

const TrailerButton = ({ title }) => {
    const trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(title)}+trailer`;

    return (
        <a
            href={trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-[#45A29E]/50 text-[#C5C6C7] font-semibold rounded-lg hover:bg-[#66FCF1]/50 hover:text-[#0B0C10] transition duration-300"
        >
            Watch Trailer
        </a>
    );
};

export default TrailerButton;
