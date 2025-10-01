import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0B0C10] border-t border-gray-800 mt-12 py-6 text-center text-sm text-[#45A29E]">
            <p className="mb-1">&copy; {new Date().getFullYear()} CineScope - An Industry Standard Movie App.</p>
            <p>Data provided by <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer" className="text-[#66FCF1] hover:underline">OMDb API</a>.</p>
            <p className="mt-2 text-xs">Aesthetic, minimalistic, and dynamic design using React & Tailwind CSS.</p>
        </footer>
    );
};

export default Footer;
