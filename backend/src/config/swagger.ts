import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";



const swaggerSpec = swaggerJsdoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "IPL Stats API",
            version: "1.0.0",
            description: "API documentation for IPL Teams, Players and Stats"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./src/index.ts"]
});


export default swaggerSpec;