// src/components/Common/Modal.jsx

import React from 'react';

const Modal = ({ children, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 bg-[#0B0C10]/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-gray-900/95 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-6">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-[#66FCF1] hover:text-red-500 transition duration-200 text-2xl"
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;