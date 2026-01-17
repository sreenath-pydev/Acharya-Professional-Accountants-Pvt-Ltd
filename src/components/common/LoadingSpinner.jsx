import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-dark-bg">
            <div className="w-12 h-12 border-4 border-primary-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
