import express, { type Express, type Request, type Response } from 'express';
import jwt from "jsonwebtoken";
import swaggerUi from "swagger-ui-express";
import { openapi } from "./openapi.ts";

const app: Express = express();
const port = Number(process.env.PORT) || 3000;

app.get("/openapi.json", (_: Request, res: Response) => {
    res.json(openapi);
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapi, {
    customSiteTitle: "ts-express POC API",
}));

app.get("/ping", (_: Request, res: Response) => {
    res.send("ok");
});

app.post("/login", (_: Request, res: Response) => {
    const payload = { "time": Date.now() / 1000 };
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        console.error("No JWT_SECRET variable");
        return res.status(500).send("Internal server error");
    }

    const token = jwt.sign(payload, secret, {
        expiresIn: '15m'
    });

    res.json({token: token});
});

app.listen(port);
