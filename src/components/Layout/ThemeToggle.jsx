import React from 'react';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className={`p-2 rounded-full transition duration-300 ${isDarkMode ? 'bg-[#45A29E]/30 text-[#66FCF1]' : 'bg-gray-200 text-gray-800'} hover:scale-105`}
            aria-label="Toggle dark/light theme"
        >
            {isDarkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
            ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.459 4.363a1 1 0 01-1.396.044l-.707-.707a1 1 0 01.044-1.396l.707-.707a1 1 0 011.396-.044l.707.707a1 1 0 01-.044 1.396l-.707.707z"></path>
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
