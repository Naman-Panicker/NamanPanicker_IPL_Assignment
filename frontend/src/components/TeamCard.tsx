import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router";

type TeamData = {
    name: string,
    logo_url: string,
    tid: number,
}

function TeamCard() {
    const [teams, setTeams] = useState<TeamData[]>([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        axios.get("http://localhost:3000/teams")
            .then((res) => {
                setTeams(res.data)
            })
            .finally(()=>{setLoading(false)});
    }, [])

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-900 mb-2 text-center">
                    IPL Teams
                </h1>
                <p className="text-gray-500 text-center mb-8">Select a team to view statistics</p>

                <div className="flex flex-wrap gap-6 justify-center">


                   {loading
                        ? Array.from({ length: 8 }).map((_, i) => (
                            <Card
                                key={i}
                                className="w-56 bg-white border-0 shadow-md">


                                <div className="bg-gray-100 rounded-t-lg p-4">
                                    <div className="w-full h-28 bg-gray-200 animate-pulse rounded" />
                                </div>

                                <CardHeader className="pt-3 pb-2">
                                    <div className="h-4 w-3/4 mx-auto bg-gray-200 animate-pulse rounded" />
                                </CardHeader>
                                <CardFooter className="justify-center pt-0 pb-4">
                                    <div className="h-3 w-1/3 bg-gray-200 animate-pulse rounded" />
                                </CardFooter>
                            </Card>
                            
                        ))
                        : teams.map((team) => (
                            <Card
                                key={team.tid}
                                className="w-56 bg-white cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200 border-0 shadow-md"
                                onClick={() => navigate(`/stats/${team.tid}`)}>


                                <div className="bg-gray-50 rounded-t-lg p-4">


                                    <img
                                        className="w-full h-28 object-contain"
                                        src={team.logo_url}
                                        alt={team.name}/>


                                </div>
                                <CardHeader className="pt-3 pb-2">
                                    <CardTitle className="text-center text-base font-semibold text-gray-700">
                                        {team.name}
                                    </CardTitle>
                                </CardHeader>


                                <CardFooter className="justify-center pt-0 pb-4">
                                    <p className="text-xs text-blue-900 font-medium">
                                        View Stats →
                                    </p>
                                </CardFooter>


                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamCard;