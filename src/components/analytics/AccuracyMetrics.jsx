import React from 'react';
import ModelPerformanceTable from "./ModelPerformanceTable";

const AccuracyMetrics = ({ stats }) => {
    return (
        <div className="w-full">
            <ModelPerformanceTable stats={stats} />
        </div>
    );
};

return (
    <div className="w-full">
        <ModelPerformanceTable />
    </div>
);


export default AccuracyMetrics;
