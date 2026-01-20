import React from 'react';
import ModelPerformanceTable from "./ModelPerformanceTable";

const AccuracyMetrics = ({ stats }) => {
    return (
        <div className="w-full">
            <ModelPerformanceTable stats={stats} />
        </div>
    );
};


export default AccuracyMetrics;
