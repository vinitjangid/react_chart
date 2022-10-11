import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import './App.css';
import { drinks } from './data'

const ScatterChart = () => {
    const drinksArray = drinks

    const eChartOptions = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            data: drinksArray.map((item) => {
                return (
                    item["Color intensity"]
                )
            }),
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: drinksArray.map((item) => {
                    return (
                        item.Hue
                    )
                }),
                type: 'scatter',
                smooth: true,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1>Scatter Chart</h1>
            <ReactECharts option={eChartOptions} />
        </div>
    )
};

export default ScatterChart;