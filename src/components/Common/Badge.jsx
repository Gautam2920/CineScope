import React from 'react';

const Badge = ({ text }) => {
    return (
        <span className="px-3 py-1 bg-[#45A29E]/30 text-[#66FCF1] text-sm font-semibold rounded-full hover:bg-[#66FCF1]/20 transition duration-200 cursor-default">
            {text}
        </span>
    );
};

export default Badge;
