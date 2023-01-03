import React from 'react';
import ChartBar from '../components/ChartBar';
import ChartLine from '../components/ChartLine';
import ChartDonut from '../components/ChartDonut';
import ChartOpt from '../components/ChartOpt';
const Page = () => {
   return (
      <div className="chart-container">
         <div className="graphic-box">
            <ChartBar />
         </div>
         <div className="graphic-box">
            <ChartLine />
         </div>
         <div className="graphic-box">
            <ChartDonut />
         </div>
         <div className="graphic-box">
            <ChartOpt />
         </div>
      </div>
   );
};

export default Page;
