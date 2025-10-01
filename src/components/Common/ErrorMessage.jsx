import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <div className="p-4 bg-red-900/50 text-red-300 rounded-lg max-w-xl mx-auto my-10 border border-red-700 shadow-xl">
            <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                <p className="font-semibold text-lg">
                    Error: <span className="font-normal">{message}</span>
                </p>
            </div>
        </div>
    );
};

export default ErrorMessage;