import styles from "./Horizontal.module.css"
import { Bar } from 'react-chartjs-2'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HoriCharts() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label:'Data 1',
                    data: [2312, 3234, 23423, 4537, 8656, 3243],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                },
                {
                    label:'Data 2',
                    data: [2312, 3234, 23423, 44537, 86556, 32443],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(150,162,235,0.4)'
                },
                {
                    label:'Data 3',
                    data: [2312, 32434, 23423, 44537, 86556, 32443],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(240,162,235,0.4)'
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legrnd: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio:true,
            responsive: true
        })
    }, [])

    return (
        <>
            <Bar data={chartData} options={chartOptions} styles={{width: "500px", height: "300px"}}/>
        </>
    )
}