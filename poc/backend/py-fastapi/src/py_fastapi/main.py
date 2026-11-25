from fastapi import FastAPI, Response, status
from fastapi.responses import PlainTextResponse
from pydantic import BaseModel, Field
import jwt
import time
import os

app = FastAPI()


class JWTToken(BaseModel):
    token: str = Field(
        title="Token",
        description="JWT token"
    )


@app.get("/ping", response_class=PlainTextResponse)
def ping_route() -> str:
    return "ok"


# https://fastapi.tiangolo.com/advanced/additional-responses/#additional-response-with-model
@app.post("/login", response_model=JWTToken, responses={500: {"model": str}})
def login_route(response: Response):
    secret = os.environ["JWT_SECRET"]

    if secret is None:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        response.response_class = PlainTextResponse
        return "Internal server error"

    try:
        token = jwt.encode({"time": time.time()}, secret)
        return JWTToken(token=token)
    except:
        return "Internal server error"
