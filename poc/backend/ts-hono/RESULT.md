# POC - ts-hono

## Usage

Run the `ts-hono` POC by doing `pnpm install` then `pnpm start`.

The API is documented with Swagger UI:
- Interactive docs: /docs
- Raw OpenAPI spec: /openapi.json

## CPU / RAM usage

### Idle

During idle, just launching the application and not doing any requests, the application stays between
**90 - 100MB** of RAM usage and most of the time staying at **0% CPU usage**.

### Under 10000 users

During the 10000 users load, the application jumped to **250-300 MB** of RAM usage and peaked at **50% CPU usage**.

## Load testing

Tested the application on multiple levels:
- 1000 users: no problems
- 5000 users: no problems
- 10000 users: no problems
- 20000 users: inconsistent results on p(95).
- 30000 users: requests start failing

We can deduce that the app can sustain **under 20000 users without problems**
and under 30000 users where users will start seeing some failure.

## OpenAPI / Swagger support

Supporting Swagger UI and OpenAPI quite simple as Hono has a supported plugin for this (`@hono/swagger-ui`).

However, I still had to write the OpenAPI specification by hand (`openapi.ts`).

## Library release date

The version of Hono I was using was released on 1st November 2026.

It is still maintained and Hono is well known mostly in the "workers".

## Major security incidents

The last "High" security incident reported on GitHub was a [CVSS 7.1/10](https://github.com/honojs/hono/security/advisories/GHSA-88fw-hqm2-52qc), which was reported on June 9th.
