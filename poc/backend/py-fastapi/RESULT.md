# POC - py-fastapi

## Usage

Run the `py-fastapi` POC by doing `uv sync` then `uv run fastapi run --port=3000 --workers 1`.

The API is documented with Swagger UI:
- Interactive docs: /docs
- Raw OpenAPI spec: /openapi.json

> [!NOTE]
> Early on, you will see that the running command is the one specifing the port.
> When using the fastapi CLI, you must specify the port.
> However, you can make it specify the port when using uvicorn.
>
> You will also see, that for performance purposes, we are specifing the number of workers our app will use.
> However, we will be choosing 1 as our default.

## CPU / RAM usage

### Idle

During idle, just launching the application and not doing any requests, the application stays between
**50 - 70MB** of RAM usage and most of the time staying at **0% CPU usage**.

### Under 10000 users

During the 10000 users load, the application jumped to **150-200 MB** of RAM usage and peaked at **99% CPU usage**.

## Load testing

Tested the application on multiple levels:
- 1000 users: already starting on 1000 users, our p(95) is above ~1.20s
- 2500 users: the p(95) is at ~3.50s
- 5000 users: the p(95) is at ~6s

We can deduce that the app cannot sustain **under 1000 users without problems**.
With more 16 workers, the app can sustain up to **5000 users without problems**, then we start also finding the p(95) to be inconsistent.

## OpenAPI / Swagger support

Supporting Swagger UI and OpenAPI is directly built into FastAPI.

With pydantic support, it is very easy to create the OpenAPI documentation.

## Library release date

The version of FastAPI we're using was released on 18th November 2026.

It is still maintained, not a huge ecosystem as it is rapidly gaining recognition in the Python community as a good backend.

## Major security incidents

The last "High" security incident reported on GitHub was a [CVSS 7.5/10](https://github.com/fastapi/fastapi/security/advisories/GHSA-f56c-v883-vx8r), which was reported on November 17th.
