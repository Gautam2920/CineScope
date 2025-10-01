import React from 'react';
import CastGrid from './CastGrid.jsx';
import RatingAggregator from './RatingAggregator.jsx';
import ReviewSection from './ReviewSection.jsx';
import SynopsisBlock from './SynopsisBlock.jsx';
import TrailerButton from './TrailerButton.jsx';
import Badge from "../Common/Badge.jsx";


const MovieDetails = ({ movie, imdbID }) => {
    const { Title, Year, Genre, Director, Actors, Plot, Poster, Ratings } = movie;

    return (
        <div className="max-w-6xl mx-auto text-[#C5C6C7]">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/3 flex-shrink-0">
                    <img
                        src={Poster && Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400x600?text=No+Poster'}
                        alt={Title}
                        className="w-full h-auto rounded-xl shadow-2xl"
                        loading="lazy"
                    />
                </div>

                <div className="md:w-2/3 flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-[#66FCF1]">{Title} ({Year})</h1>
                    <div className="flex flex-wrap gap-2">
                        {Genre && Genre.split(',').map(genre => <Badge key={genre} text={genre.trim()} />)}
                    </div>
                    <SynopsisBlock plot={Plot} />
                    <RatingAggregator ratings={Ratings} />
                    <TrailerButton title={Title} />
                </div>
            </div>
.jsx
            <CastGrid actorsString={Actors} directorString={Director} />
            <ReviewSection imdbID={imdbID} />
        </div>
    );
};

export default MovieDetails;
