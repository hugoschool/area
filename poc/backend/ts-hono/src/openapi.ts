export default {
    openapi: '3.0.0',
    info: {
        title: 'ts-hono POC API',
        version: '1.0.0',
        description: 'API documentation for your service',
    },
    paths: {
        '/ping': {
            get: {
                summary: 'Health check',
                responses: {
                    '200': {
                        description: 'ok',
                        content: {
                            "text/plain": {
                               schema: { type: "string", example: "ok" },
                            },
                        },
                    },
                },
            },
        },
        '/login': {
            post: {
                summary: 'Signs a simple JWT token',
                responses: {
                    '200': {
                        description: 'Token issued',
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string",
                                            description: "Signed JWT",
                                        },
                                    },
                                    required: ["token"],
                                },
                            },
                        },
                    },
                    '500': {
                        description: 'An error occured',
                        content: {
                            "text/plain": {
                               schema: { type: "string", example: "Internal server error" },
                            },
                        },
                    }
                },
            },
        },
    },
};
