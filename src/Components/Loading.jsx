import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <h1 className='text-4xl font-bold'>Loading......</h1>
            <span className="loading loading-spinner loading-xl"></span>

            
        </div>
    );
};

export default Loading;