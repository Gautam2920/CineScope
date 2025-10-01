import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto my-8">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a film, series, or episode..."
                    className="w-full p-4 pl-14 text-xl rounded-lg 
                     bg-[#0B0C10] text-[#C5C6C7] border-2 border-gray-700
                     focus:border-[#66FCF1] focus:ring-4 focus:ring-[#66FCF1]/30 
                     transition duration-300 placeholder-[#45A29E] shadow-xl"
                    aria-label="Movie search input"
                />

                <button
                    type="submit"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 
                       text-[#66FCF1] hover:text-[#45A29E] transition duration-200"
                    aria-label="Submit search"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;