import React from 'react';

const SynopsisBlock = ({ plot }) => {
    if (!plot) return null;
    return (
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 shadow-inner">
            <h3 className="text-2xl font-bold text-[#66FCF1] mb-2">Synopsis</h3>
            <p className="text-[#C5C6C7]">{plot}</p>
        </div>
    );
};

export default SynopsisBlock;
