import React from 'react';

const CommonButton = ({ children, onClick, className  }) => {
    return (
        <button
            onClick={onClick}
            className={`mb-4 block w-full text-sm font-bold text-center px-2 py-4 rounded-lg ${className}`}
        >
            {children}
        </button>
    );
};

export default CommonButton;
