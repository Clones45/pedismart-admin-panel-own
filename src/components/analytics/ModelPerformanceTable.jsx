import React from 'react';
import { useTheme } from "../../context/ThemeContext";

const ModelPerformanceTable = () => {
    const { isDarkMode } = useTheme();

    const data = [
        { category: "Ride Booking", tp: 15, fp: 1, fn: 4, precision: 0.9375, recall: 0.7894736842, f1: 0.8571428571, acc: 0.8372093023 },
        { category: "Fare Management", tp: 32, fp: 20, fn: 1, precision: 0.6153846154, recall: 0.9696969697, f1: 0.7529411765, acc: null },
        { category: "Route Optimization", tp: 4, fp: 0, fn: 5, precision: 1, recall: 0.4444444444, f1: 0.6153846154, acc: null },
        { category: "ETA Prediction", tp: 19, fp: 4, fn: 0, precision: 0.8260869565, recall: 1, f1: 0.9047619048, acc: null },
        { category: "User Matching", tp: 2, fp: 1, fn: 2, precision: 0.6666666667, recall: 0.5, f1: 0.5714285714, acc: null },
        { category: "System Up-time", tp: 0, fp: 2, fn: 2, precision: 0, recall: 0, f1: 0, acc: null }
    ];

    const formatNumber = (num) => {
        if (num === null || num === undefined) return "";
        // If it's an integer, return as is. If float, verify if it needs truncation.
        // The image shows up to 10 decimal places. I will show up to 4 for clean UI, or 6.
        if (Number.isInteger(num)) return num;
        return num.toFixed(4); // Keeping it clean, 10 digits is too wide for a table usually.
    };

    return (
        <div className={`mt-6 p-6 rounded-xl border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} shadow-sm`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        Model Performance Metrics
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Detailed breakdown by category
                    </p>
                </div>
                <div className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-green-900/30 border border-green-800' : 'bg-green-50 border border-green-100'}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                        System Accuracy
                    </p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-green-300' : 'text-green-800'}`}>
                        {formatNumber(data[0].acc * 100)}%
                    </p>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className={`min-w-full text-sm text-left border-collapse ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <thead className={`text-xs uppercase ${isDarkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                        <tr>
                            <th className="px-4 py-3 border-b border-gray-600 font-semibold">Category Names</th>
                            <th className="px-4 py-3 border-b border-gray-600 font-semibold">True Positives</th>
                            <th className="px-4 py-3 border-b border-gray-600 font-semibold">False Positives</th>
                            <th className="px-4 py-3 border-b border-gray-600 font-semibold">False Negatives</th>
                            <th className="px-4 py-3 border-b border-gray-600 font-semibold">Precision</th>
                            <th className="px-4 py-3 border-b border-gray-600 font-semibold">Recall</th>
                            <th className="px-4 py-3 border-b border-gray-600 font-semibold">F1-Score</th>
                            <th className="px-4 py-3 border-b border-gray-600 font-semibold">Global Accuracy</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {data.map((row, index) => (
                            <tr key={index} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/30' : 'hover:bg-gray-50'}`}>
                                <td className={`px-4 py-3 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{row.category}</td>
                                <td className="px-4 py-3">{row.tp}</td>
                                <td className="px-4 py-3">{row.fp}</td>
                                <td className="px-4 py-3">{row.fn}</td>
                                <td className="px-4 py-3">{formatNumber(row.precision)}</td>
                                <td className="px-4 py-3">{formatNumber(row.recall)}</td>
                                <td className="px-4 py-3">{formatNumber(row.f1)}</td>
                                <td className="px-4 py-3 font-medium">
                                    {row.acc !== null ? (
                                        <span className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'bg-blue-900/50 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                                            {formatNumber(row.acc)}
                                        </span>
                                    ) : (
                                        <span className="text-gray-400">-</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="font-semibold">Insight:</span> The system demonstrates high reliability in the primary
                    <span className={`mx-1 font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Ride Booking</span>
                    category, achieving an accuracy score of <span className="font-bold">{formatNumber(data[0].acc)}</span>.
                </p>
            </div>
        </div>
    );
};

export default ModelPerformanceTable;
