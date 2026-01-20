
import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle, Clock, MapPin, Gauge } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import ModelPerformanceTable from "./ModelPerformanceTable";

const AccuracyConfigCard = ({ title, value, icon: Icon, color, sampleSize, unit = "%" }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} shadow-sm`}>
            <div className="flex justify-between items-start mb-2">
                <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
                    <Icon size={20} className={color.replace("bg-", "text-")} />
                </div>
                {sampleSize !== undefined && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                        N={sampleSize}
                    </span>
                )}
            </div>
            <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{title}</h3>
            <div className="flex items-baseline gap-1 mt-1">
                <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{value}</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{unit}</span>
            </div>
        </div>
    );
};

const AccuracyMetrics = ({ data, stats }) => {
    const { isDarkMode } = useTheme();

    if (!data) return null;

    // Handle both old structure (directly from user feedback) and new structure
    const metrics = data.metrics || data;

    // Extract values with safeguards
    const distAcc = metrics.distanceAccuracy || {};
    const timeAcc = metrics.timeAccuracy || {};

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>System Accuracy Metrics</h2>
                <span className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                    Operational Performance
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <AccuracyConfigCard
                    title="Distance Accuracy"
                    value={distAcc.accuracyPercentage || 0}
                    sampleSize={distAcc.analyzedCount || 0}
                    icon={MapPin}
                    color="bg-green-500"
                />
                <AccuracyConfigCard
                    title="ETA Accuracy"
                    value={timeAcc.accuracyPercentage || 0}
                    sampleSize={timeAcc.analyzedCount || 0}
                    icon={Clock}
                    color="bg-purple-500"
                />
                <AccuracyConfigCard
                    title="Route Precision"
                    value={distAcc.averageDeviationKm || 0}
                    sampleSize={distAcc.analyzedCount || 0}
                    unit="km dev"
                    icon={CheckCircle}
                    color="bg-blue-500"
                />
                <AccuracyConfigCard
                    title="Time Deviation"
                    value={timeAcc.averageDeviationMinutes || 0}
                    sampleSize={timeAcc.analyzedCount || 0}
                    unit="min dev"
                    icon={Gauge} // Changed from Radio to Gauge for speed/time context
                    color="bg-orange-500"
                />
            </div>

            <div className={`mt-4 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} italic text-center`}>
                * Metrics computed based on completed rides vs. initial estimates
            </div>

            <ModelPerformanceTable stats={stats} />
        </div>
    );
};

export default AccuracyMetrics;
