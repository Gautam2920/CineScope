import React from 'react';

const CastGrid = ({ actorsString, directorString }) => {

    const actors = actorsString ? actorsString.split(',').map(s => s.trim()) : [];
    const director = directorString ? directorString.split(',').map(s => s.trim()) : [];

    const mainCrew = [
        { role: 'Director', names: director },
        { role: 'Main Cast', names: actors.slice(0, 5) }
    ].filter(item => item.names.length > 0);

    return (
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-[#66FCF1] mb-4">Cast & Crew</h3>

            {mainCrew.map(crew => (
                <div key={crew.role} className="mb-4 last:mb-0">
                    <h4 className="text-lg font-semibold text-[#C5C6C7] mb-1">{crew.role}:</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {crew.names.map(name => (

                            <span
                                key={name}
                                className="text-sm px-3 py-1 bg-gray-700/80 rounded-full text-[#C5C6C7] 
                           hover:bg-[#45A29E] transition duration-200 cursor-pointer"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            ))}

            {actors.length > 5 && (
                <button className="mt-4 text-sm font-semibold text-[#66FCF1] hover:underline">
                    View All {actors.length} Cast Members...
                </button>
            )}
        </div>
    );
};

export default CastGrid;