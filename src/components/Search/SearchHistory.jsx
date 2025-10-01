import React from 'react';

const SearchHistory = ({ history = [], onHistorySelect }) => {
    if (history.length === 0) return null;

    const uniqueHistory = Array.from(new Set(history)).slice(0, 5);

    return (
        <div className="w-full max-w-3xl mx-auto mb-6 text-[#C5C6C7]">
            <p className="text-sm font-semibold mb-2 text-[#45A29E]">Recent Searches:</p>
            <div className="flex flex-wrap gap-2">
                {uniqueHistory.map((term) => (
                    <button
                        key={term}
                        onClick={() => onHistorySelect(term)}
                        className="px-3 py-1 text-sm rounded-full bg-gray-800 border border-gray-700 
                                   hover:bg-[#45A29E]/30 hover:text-[#66FCF1] transition duration-200"
                    >
                        {term}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchHistory;