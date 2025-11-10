import React from 'react';
import aciLogo from '../assets/aci.png'
const Brands = () => {
    return (
        <div className='w-6/11 mx-auto mt-12'>
            <div className='grid grid-cols-3'>
                <div>
                    <img className='w-37 rounded-full mx-auto' src={aciLogo} alt="" />
                    <h2 className='text-xl font-semibold text-center'>ACI LTD</h2>
                </div>
                <div>
                    <img className='w-37 rounded-full mx-auto' src={aciLogo} alt="" />
                    <h2 className='text-xl font-semibold text-center'>ACI LTD</h2>
                </div>
                <div>
                    <img className='w-37 rounded-full mx-auto' src={aciLogo} alt="" />
                    <h2 className='text-xl font-semibold text-center'>ACI LTD</h2>
                </div>

            </div>


            
        </div>
    );
};

export default Brands;