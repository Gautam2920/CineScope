import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const Header = ({ isDarkMode, onToggleTheme }) => {
    return (
        <header className="bg-gray-100 dark:bg-[#0B0C10] shadow-md border-b border-gray-300 dark:border-gray-800 sticky top-0 z-10 transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                
                <Link 
                    to="/" 
                    className="text-3xl font-extrabold text-[#66FCF1] hover:text-[#45A29E] transition duration-200"
                >
                    CineScope
                </Link>

                <div className="flex items-center space-x-4">
                    <Link 
                        to="/" 
                        className="text-gray-800 dark:text-[#C5C6C7] hover:text-[#66FCF1] transition duration-200 hidden sm:inline"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/discover" 
                        className="text-gray-800 dark:text-[#C5C6C7] hover:text-[#66FCF1] transition duration-200 hidden sm:inline"
                    >
                        Discover
                    </Link>

                    <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
                </div>
            </div>
        </header>
    );
};

export default Header;
