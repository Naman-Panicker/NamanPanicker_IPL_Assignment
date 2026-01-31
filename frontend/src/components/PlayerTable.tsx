import axios from "axios";
import { useEffect, useState } from "react";

type PlayerData = {
    pid: number,
    name: string,
    team: {
        name: string
    },
    country: string,
    role: string,
    dob: string
}

function PlayerTable(){

    const [playerData, setPlayerData] = useState<PlayerData[]>([])
    const [pageCount, setPageCount] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)

        axios.get(`http://localhost:3000/players/${pageCount}`)
        .then((res)=>{
            setPlayerData(res.data);
        })
        .finally(()=>{
            setLoading(false)
        })
    },[pageCount])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-blue-900">
                Loading...
            </div>
        )
    }

    return(
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">

            <div className="max-w-5xl mx-auto">
                
                <h1 className="text-3xl font-bold text-blue-900 mb-2 text-center">
                    Player Directory
                </h1>
                <p className="text-gray-500 text-center mb-6">Browse all IPL players</p>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">

                    <table className="w-full">
                        
                        <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="p-4 text-left font-semibold">Name</th>
                                <th className="p-4 text-left font-semibold">Team</th>
                                <th className="p-4 text-left font-semibold">Nationality</th>
                                <th className="p-4 text-left font-semibold">Role</th>
                                <th className="p-4 text-left font-semibold">DOB</th>
                            </tr>                        
                        </thead>

                        <tbody>
                            {playerData.map((data, index)=>(
                                <tr 
                                    key={data.pid} 
                                    className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>

                                    <td className="p-4 font-medium text-gray-800">{data.name}</td>
                                    <td className="p-4 text-gray-600">{data.team.name}</td>
                                    <td className="p-4 text-gray-600">{data.country}</td>
                                    <td className="p-4">

                                        <span className="px-2 py-1 bg-blue-100 text-blue-900 rounded text-sm">
                                            {data.role}
                                        </span>

                                    </td>
                                    <td className="p-4 text-gray-600">{data.dob}</td>
                                </tr>
                            ))}


                        </tbody>
                    </table>

                    <div className="flex justify-between items-center p-4 bg-gray-50 border-t">

                        <button 
                            className="px-5 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium"
                            onClick={()=>{
                                setPageCount(pageCount-1)
                            }}
                            disabled={pageCount <= 1}> 
                            Previous
                        </button>


                        <span className="text-gray-600 font-medium">
                            Page {pageCount} of 4
                        </span>



                        <button className="px-5 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium"
                            onClick={()=>{
                                setPageCount(pageCount+1)
                            }}
                            disabled={pageCount >= 4}>
                            Next
                        </button>



                    </div>

                </div>

            </div>

        </div>
    )
}

export default PlayerTable;