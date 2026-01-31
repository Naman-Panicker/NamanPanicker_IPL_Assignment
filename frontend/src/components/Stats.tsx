import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

type RunStats = {
    runs50: number,
    runs100: number,
    totalRuns: number
}

function Stats() {
    const params = useParams();
    const [stats, setStats] = useState<RunStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        axios.get(`http://localhost:3000/team-stats/${params.tid}`)
            .then((res) => {
                setStats(res.data);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [params.tid])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-blue-900">
                Loading...
            </div>
        )
    }

    const data = {
        labels: [
            "50 Runs",
            "100 Runs",
            "Total Runs"
        ],
        datasets: [{
            label: 'Runs Chart',
            data: stats ? [stats.runs50, stats.runs100, stats.totalRuns] : [],
            backgroundColor: [
                'rgb(30, 58, 138)',
                'rgb(59, 130, 246)',
                'rgb(147, 197, 253)'
            ],
            borderColor: [
                'rgb(30, 58, 138)',
                'rgb(59, 130, 246)',
                'rgb(147, 197, 253)'
            ],
            hoverOffset: 4
        }]
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
            <div className="max-w-4xl mx-auto">


                <h1 className="text-3xl font-bold text-blue-900 mb-2 text-center">
                    Team Statistics
                </h1>


                <p className="text-gray-500 text-center mb-8">Run performance breakdown</p>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex justify-center">
                        <div className="w-80 h-80">

                            
                            <Pie 
                                data={data} 
                                options={{
                                    responsive: true, 
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: 'bottom',
                                            labels: {
                                                padding: 20,
                                                font: {
                                                    size: 14
                                                }
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {stats && (
                        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-2xl font-bold text-blue-900">{stats.runs50}</p>
                                <p className="text-sm text-gray-500">50s Scored</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-2xl font-bold text-blue-900">{stats.runs100}</p>
                                <p className="text-sm text-gray-500">100s Scored</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-2xl font-bold text-blue-900">{stats.totalRuns}</p>
                                <p className="text-sm text-gray-500">Total Runs</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Stats;