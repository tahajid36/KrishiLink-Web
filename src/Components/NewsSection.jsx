import React from 'react';

const NewsSection = () => {
    return (
        <div className='mt-9 ]'>
            <h1 className='text-5xl font-bold text-center'>Latest News</h1>
            <div className='grid grid-cols-3 gap-5 mt-10 p-6 bg-[#4B2E09] rounded-2xl '>
                <div className='col-span-2 bg-white p-3 rounded-2xl'>
                    <h1 className='text-xl font-semibold text-gray-600'>The USDA is confirming the release of key agricultural reports in November despite a government shutdown, including milk production and crop production data essential for market forecasting and planning
                    </h1>
                </div>
                <div className='bg-white p-3 rounded-2xl '> 
                    <h1 className='text-xl font-semibold text-gray-600'>Untimely rainfall has caused significant crop damage worth Tk 10.27 crore in Rajshahi.
                    </h1>
                </div>
                <div className='col-span-1 bg-white p-3 rounded-2xl'>
                    <h1 className='text-xl font-semibold text-gray-600'>Rangpur farmers are expecting 23.08 lakh tonnes of Boro rice
                    </h1>
                </div>
                <div className='col-span-2 bg-white p-3 rounded-2xl'>
                    <h1 className='text-xl font-semibold text-gray-600'>New mulching methods are opening prospects for watermelon cultivation in Jhenaidah
                    </h1>
                </div>
                <div className='col-span-3 text-center bg-white p-3 rounded-2xl'>
                    <h1 className='text-xl font-semibold text-gray-600'>Flood-resilient vegetable farming methods are gaining popularity in the Gaibandha
                    </h1>
                </div>

            </div>
        </div>
    );
};

export default NewsSection;