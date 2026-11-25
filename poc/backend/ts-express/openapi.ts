export const openapi = {
    openapi: "3.0.3",
    info: {
        title: "ts-express POC API",
        version: "1.0.0",
        description:
            "Minimal Express POC using Typescript.",
    },
    servers: [{ url: "/" }],
    paths: {
        "/ping": {
            get: {
                summary: "Simple health check",
                description: "Only returns `ok`",
                operationId: "ping",
                responses: {
                    "200": {
                        description: "Service is up",
                        content: {
                            "text/plain": {
                                schema: { type: "string", example: "ok" },
                            },
                        },
                    },
                },
            },
        },
        "/login": {
            post: {
                summary: "Gives a JWT",
                description:
                    "Signs a short-lived JWT (15 minutes) using the `JWT_SECRET` environment variable. " +
                    "Fails with 500 when the secret is not configured.",
                operationId: "login",
                responses: {
                    "200": {
                        description: "Token issued",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string",
                                            description: "Signed JWT, valid for 15 minutes",
                                        },
                                    },
                                    required: ["token"],
                                },
                            },
                        },
                    },
                    "500": {
                        description: "`JWT_SECRET` is not configured",
                        content: {
                            "text/plain": {
                                schema: { type: "string", example: "Internal server error" },
                            },
                        },
                    },
                },
            },
        },
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                description: "Token returned by `POST /login`.",
            },
        },
    },
};
