# POC - ts-express

## Usage

Run the `ts-express` POC by doing `pnpm install` then `pnpm start`.

The API is documented with Swagger UI:
- Interactive docs: /docs
- Raw OpenAPI spec: /openapi.json

## CPU / RAM usage

### Idle

During idle, just launching the application and not doing any requests, the application stays between
**80 - 90MB** of RAM usage and most of the time staying at **0% CPU usage**.

### Under 10000 users

During the 10000 users load, the application jumped to **250-300 MB** of RAM usage and peaked at **60% CPU usage**.

## Load testing

Tested the application on multiple levels:
- 1000 users: no problems
- 5000 users: no problems
- 10000 users: starting to encounter p(95) > 500ms problems on some runs.
- 20000 users: still having inconsistent results on p(95).
- 30000 users: requests start failing

We can deduce that the app can sustain **under 10000 users without problems**
and under 30000 users where users will start seeing some failure.

## OpenAPI / Swagger support

Supporting Swagger UI and OpenAPI was a little complicated compared to other frameworks.

The support came from the `swagger-ui-express`, however I had to detail out the OpenAPI spec by hand.

Perhaps there are easier methods, but it wasn't explicit by other tutorials.

Also the library `swagger-ui-express` hasn't been updated in at least a year (last update `Jan 25 2025`).

## Library release date

The version of Express I was using was released on 9th October 2026.

It is still maintained and Express is well known, which also means that it has a large ecosystem.

## Major security incidents

The Express library [has not seen any security updates](https://expressjs.com/en/advanced/security-updates/) since the release of the 5.0 version which was back in 2024.
