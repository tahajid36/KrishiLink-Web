import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h2>
            <p className="text-gray-600 mb-6 text-center max-w-md">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default Error;
