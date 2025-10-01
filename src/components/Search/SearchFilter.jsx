import React from 'react';

const SearchFilter = ({ filters, onFilterChange }) => {
    return (
        <div className="max-w-3xl mx-auto my-6 flex flex-wrap gap-4 text-[#C5C6C7]">
            <select
                value={filters.type}
                onChange={(e) => onFilterChange('type', e.target.value)}
                className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-[#C5C6C7] focus:outline-none focus:ring-2 focus:ring-[#66FCF1]"
            >
                <option value="">All Types</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
            </select>

            <input
                type="text"
                value={filters.year}
                onChange={(e) => onFilterChange('year', e.target.value)}
                placeholder="Year"
                className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-[#C5C6C7] w-24 focus:outline-none focus:ring-2 focus:ring-[#66FCF1]"
            />
        </div>
    );
};

export default SearchFilter;
