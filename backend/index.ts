import express, { type Request, type Response } from "express";
import prisma from "./src/config/prisma.ts";
import cors from "cors";


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());



app.get("/teams", async (req: Request, res: Response)=>{

    
   console.log("\n\n\nGet Teams Called\n\n\n");

   try{
    const teamData = await prisma.teams.findMany();

    console.log("Prisma for Teams Called")
    console.log(teamData);

    res.json(teamData);
    }catch(error){
        console.log(error);
        res.json("Something Went Wrong");
    }
})


app.get("/players/:number", async(req:Request, res: Response)=>{

    let pageNum = Number(req.params.number) -1;



    console.log("\n\n\nGet players called\n\n\n");


    try{

        if(pageNum>4){
            res.status(400).json("Bad Request")


        }else{

            const getAllPlayers = await prisma.players.findMany({
                skip: 50*pageNum,
                take: 50,
                include:{
                    team:true
                }
            })
            console.log("Prisma called");
            res.json(getAllPlayers);
        }


    }catch(error){
        console.log(error);
    } 
    
})


app.get("/team-stats/:tid", async(req: Request, res: Response)=>{

    const team_id = Number(req.params.tid);
    
    const allStats = await prisma.stats.findUnique({
        where:{
             team_id: team_id
        }
    });

    console.log(allStats);

    res.status(200).json(allStats);


})







app.listen(PORT);