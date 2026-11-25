import { serve } from "@hono/node-server";
import { Hono } from "hono";
import jwt from "jsonwebtoken";

const app = new Hono();
const port = Number(process.env.PORT) || 3000;

app.get("/ping", (c) => {
    return c.text("ok");
})

app.post("/login", (c) => {
    const payload = { "time": Date.now() / 1000 };
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        console.error("No JWT_SECRET variable");
        c.status(500);
        return c.text("Internal server error");
    }

    const token = jwt.sign(payload, secret, {
        expiresIn: '15m'
    });

    return c.json({ token: token });
});

serve({
    fetch: app.fetch,
    port: port,
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
})
