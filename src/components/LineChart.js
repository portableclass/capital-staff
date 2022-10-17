import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../assets/styles/css/lineChart.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export default function LineChart({
    title = "Stats",
    legendTitle = "stats",
    labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green'],
    data = Array.from({length: 10}, () => Math.floor(Math.random() * 100)) })
{

    let date = new Date()
    const temp = new Array(10)
    for (let i = temp.length - 1; i >= 0; i--) {
        temp[i] = new Date(+date).toLocaleDateString();
        date.setDate(date.getDate() - 1);
    }
    labels = temp

    return (
        <div className="line-chart-wrapper">
            <div className="chart-header">
                <span className="chart-ico">
                    <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                        <path
                            d="M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64"
                        />
                    </svg>
                </span>
                <h3>{title}</h3>
            </div>
            <div className="line-chart">
                <Line
                    data={
                        {
                            labels: labels,
                            datasets: [{
                                label: legendTitle,
                                data: data,
                                borderColor: "rgb(5, 150, 105)",
                                backgroundColor: "rgb(5, 150, 105)"
                            }]
                        }
                    }
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: "bottom",
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    lineWidth: 2,
                                    color: "#f3f4f6",
                                    borderWidth: 2,
                                    borderColor: "#f3f4f6",
                                    tickColor: "#f3f4f6",
                                    tickWidth: 2,
                                    reverse: true,
                                },
                            },
                            y: {
                                grid: {
                                    drawOnChartArea: false,
                                    drawTicks: false,
                                    borderColor: "#f3f4f6",
                                    borderWidth: 2
                                },
                                suggestedMin: 0,
                                ticks: {
                                    display: false
                                },
                            },
                        },

                    }}
                />
            </div>
        </div>
    )
}