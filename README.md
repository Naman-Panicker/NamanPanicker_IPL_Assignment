# The IPL Nerd

A full-stack web application built using IPL (Indian Premier League) data.  
The project demonstrates database modeling, backend API development, OpenAPI documentation, and frontend data visualization.



## Tech Stack

**Backend**
- Node.js + Express
- TypeScript
- PostgreSQL
- Prisma ORM
- Swagger (OpenAPI)

**Frontend**
- React
- Tailwind CSS
- Chart.js


## Features Implemented

- Relational database schema for IPL data
- REST APIs exposing IPL teams, players, and team statistics
- Pagination support for player data
- Health check endpoint
- OpenAPI documentation using Swagger UI
- Frontend with multiple pages, charts, and table views
- Proper loading states across the UI



## Backend API Endpoints

Endpoint : Description 

`GET /health` : Health check 
`GET /teams` : Fetch all teams 
`GET /players/:page` : Paginated players 
`GET /team-stats/:tid` : Team statistics 

