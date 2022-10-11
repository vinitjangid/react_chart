import React, { useEffect } from 'react';

import ReactECharts from 'echarts-for-react';
import { drinks } from './data'

const BarChart = () => {
    // Intialiazing three empty arrays to store avg of each category
    let alcohol1 = []
    let alcohol2 = []
    let alcohol3 = []

    // finding each category to store values of Malic acid
    drinks.map((item) => {
        if (item.Alcohol === 1) {
            return alcohol1.push(item["Malic Acid"])
        } else if (item.Alcohol === 2) {
            return alcohol2.push(item["Malic Acid"])
        } else if (item.Alcohol === 3) {
            return alcohol3.push(item["Malic Acid"])
        }
    })

    // finding sum of each category
    const sum1 = alcohol1.reduce((a, b) => a + b, 0);
    const sum2 = alcohol2.reduce((a, b) => a + b, 0);
    const sum3 = alcohol3.reduce((a, b) => a + b, 0);

    // find average of each
    const average1 = sum1 / alcohol1.length
    const average2 = sum2 / alcohol2.length
    const average3 = sum3 / alcohol3.length

    const eChartOptions = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            data: ["Alochol 1", "Alochol 2","Alcohol 3"],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data:[average1,average2,average3],
                type: 'bar',
                smooth: true,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return (
        <div>
            <h1>Bar Chart</h1>
            <ReactECharts option={eChartOptions} />
        </div>
    )
};

export default BarChart;