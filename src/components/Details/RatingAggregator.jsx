import React from 'react';

const RatingAggregator = ({ ratings }) => {
    if (!ratings || ratings.length === 0) return null;

    const getStyle = (source) => {
        switch (source) {
            case 'Internet Movie Database':
                return { color: 'text-yellow-400', bg: 'bg-yellow-400/20', icon: 'IMDb' };
            case 'Rotten Tomatoes':
                return { color: 'text-red-500', bg: 'bg-red-500/20', icon: 'RT' };
            case 'Metacritic':
                return { color: 'text-green-400', bg: 'bg-green-400/20', icon: 'Meta' };
            default:
                return { color: 'text-gray-400', bg: 'bg-gray-700', icon: 'RATING' };
        }
    };

    return (
        <div className="flex flex-wrap gap-4 mb-6">
            {ratings.map((rating, index) => {
                const style = getStyle(rating.Source);
                return (
                    <div
                        key={index}
                        className={`flex items-center space-x-2 p-3 rounded-lg ${style.bg} border-2 border-transparent transition duration-300 hover:border-[#66FCF1]`}
                    >
                        <span className={`font-extrabold text-lg ${style.color}`}>{style.icon}</span>
                        <span className="text-lg font-semibold text-[#C5C6C7]">{rating.Value}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default RatingAggregator;