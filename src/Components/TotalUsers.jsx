import React from 'react';

const TotalUsers = () => {
    return (
        <div className='w-6/11 mx-auto flex flex-col justify-center mt-8' >
            <div className="stats w-full stats-vertical lg:stats-horizontal bg-[#F5F5DC] shadow-sm">
  <div className="stat flex flex-col justify-center items-center">
    <div className="stat-title">Active Users</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat flex flex-col justify-center items-center">
    <div className="stat-title">Sellers</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat flex flex-col justify-center items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
        </div>
    );
};

export default TotalUsers;