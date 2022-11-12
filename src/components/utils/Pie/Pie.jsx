import React from 'react'
import 'chart.js/auto';
import { Pie, defaults, Doughnut } from 'react-chartjs-2'
const Chart = () => {
    return (
        <>
            <Doughnut
                data={{
                    labels: ['Present', 'Absent'],
                    datasets: [
                        {
                            label: 'testing',
                            data: [9, 4],
                            backgroundColor: [
                                'Green',
                                'Red'
                            ]
                        }
                    ]
                }}
                height={600}
                width={1000}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltips: {
                            enabled: false
                        }
                    }
                }}
            />
        </>
    )
}

export default Chart
