from fastapi import FastAPI, Response, status
from fastapi.responses import PlainTextResponse
from pydantic import BaseModel
import jwt
import time
import os

app = FastAPI()


@app.get("/ping", response_class=PlainTextResponse)
def ping_route() -> str:
    return "ok"


@app.post("/login")
def login_route(response: Response):
    secret = os.environ["JWT_SECRET"]

    if secret is None:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        response.response_class = PlainTextResponse
        return "Internal server error"

    token = jwt.encode({"time": time.time()}, secret)

    return {"token": token}
