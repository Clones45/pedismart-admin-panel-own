import React from 'react';
import { useTheme } from "../../context/ThemeContext";

const ModelPerformanceTable = () => {
    const { isDarkMode } = useTheme();

    const data = [
        { category: "Transportation", tp: 15, fp: 1, fn: 4, precision: 0.9375, recall: 0.7894736842, f1: 0.8571428571, acc: 0.8372093023 },
        { category: "Food & Beverages", tp: 32, fp: 20, fn: 1, precision: 0.6153846154, recall: 0.9696969697, f1: 0.7529411765, acc: null },
        { category: "Utilities", tp: 4, fp: 0, fn: 5, precision: 1, recall: 0.4444444444, f1: 0.6153846154, acc: null },
        { category: "Health & Wellness", tp: 19, fp: 4, fn: 0, precision: 0.8260869565, recall: 1, f1: 0.9047619048, acc: null },
        { category: "Groceries", tp: 2, fp: 1, fn: 2, precision: 0.6666666667, recall: 0.5, f1: 0.5714285714, acc: null },
        { category: "Others", tp: 0, fp: 2, fn: 2, precision: 0, recall: 0, f1: 0, acc: null }
    ];

    const formatNumber = (num) => {
        if (num === null || num === undefined) return "";
        // If it's an integer, return as is. If float, verify if it needs truncation.
        // The image shows up to 10 decimal places. I will show up to 4 for clean UI, or 6.
        if (Number.isInteger(num)) return num;
        return num.toFixed(4); // Keeping it clean, 10 digits is too wide for a table usually.
    };

    return (
        <div className="mt-8 overflow-x-auto">
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Table 1: Model Performance Metrics per Category
            </h3>
            <table className={`min-w-full text-sm text-left border-collapse ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <thead className={`text-xs uppercase ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    <tr>
                        <th className="px-4 py-3 border-b border-gray-600">Category Names</th>
                        <th className="px-4 py-3 border-b border-gray-600">True Positives</th>
                        <th className="px-4 py-3 border-b border-gray-600">False Positives</th>
                        <th className="px-4 py-3 border-b border-gray-600">False Negatives</th>
                        <th className="px-4 py-3 border-b border-gray-600">Precision</th>
                        <th className="px-4 py-3 border-b border-gray-600">Recall</th>
                        <th className="px-4 py-3 border-b border-gray-600">F1-Score</th>
                        <th className="px-4 py-3 border-b border-gray-600">Global Accuracy Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className={`border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'}`}>
                            <td className="px-4 py-3 font-medium">{row.category}</td>
                            <td className="px-4 py-3">{row.tp}</td>
                            <td className="px-4 py-3">{row.fp}</td>
                            <td className="px-4 py-3">{row.fn}</td>
                            <td className="px-4 py-3">{formatNumber(row.precision)}</td>
                            <td className="px-4 py-3">{formatNumber(row.recall)}</td>
                            <td className="px-4 py-3">{formatNumber(row.f1)}</td>
                            <td className="px-4 py-3">{row.acc !== null ? formatNumber(row.acc) : ""}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ModelPerformanceTable;
