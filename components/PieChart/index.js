import styles from "./PieChart.module.css"
import { Pie } from 'react-chartjs-2'


import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label:'# of votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: [
                        'rgba(255,99,235,0.4)',
                        'rgba(53,162,25,0.4)',
                        'rgba(255,162,235,0.4)',
                        'rgba(33,162,235,0.4)',
                        'rgba(53,162,235,0.4)',
                        'rgba(19,162,235,0.4)'
                    ],
                    backgroundColor: [
                        'rgba(255,99,235,0.4)',
                        'rgba(53,162,25,0.4)',
                        'rgba(255,162,235,0.4)',
                        'rgba(33,102,235,0.4)',
                        'rgba(53,16,235,0.4)',
                        'rgba(19,40,235,0.4)'
                    ],
                    borderwidth: 1
                }
            ]
        })

        setChartOptions({
            plugins: {
                legrnd: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio:false,
            responsive: true
        })
    }, [])

    return (
        <>
            <Pie data={chartData} options={chartOptions} styles={{width: "500px", height: "300px"}}/>
        </>
    )
}