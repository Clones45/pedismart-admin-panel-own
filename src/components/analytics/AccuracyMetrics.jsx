import React from 'react';
import { useTheme } from "../../context/ThemeContext";
import ModelPerformanceTable from "./ModelPerformanceTable";

const AccuracyMetrics = ({ data }) => {
    const { isDarkMode } = useTheme();

    if (!data) return null;

    // Handle both old structure (directly from user feedback) and new structure
    const metrics = data.metrics || data;

    // Extract values with safeguards
    const distAcc = metrics.distanceAccuracy || {};
    const timeAcc = metrics.timeAccuracy || {};

    return (
        <div className="w-full">
            <ModelPerformanceTable />
        </div>
    );
};

export default AccuracyMetrics;
