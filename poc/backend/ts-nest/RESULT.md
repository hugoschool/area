# POC - ts-nest

## Usage
Run the `ts-nest` POC by doing `pnpm run start`.
The API is documented with Swagger UI:
- Interactive docs: /docs
- Raw OpenAPI spec: /openapi.json

## CPU / RAM usage

### Idle

During idle, just launching the application and not doing any requests, the application stays between 158MB of RAM usage and most of the time staying at 0% CPU usage.

### Under 10000 users

During the 10000 users load, the application jumped to **300-310 MB** of ram usage and peaked at **116% at CPU usage**.

## Load testing
Tested the application on multiple levels:
- 1000 users: the p(95) is inconsistent, it's between 642ms and 1.20s
- 2500 users: the p(95) is still inconsistent, it stays between 1.34s and 2.9s
- 5000 users: the p(95) stays between 4.71s and 7.33s

We can deduce that app cannot sustain under 1000 users without problems. The p(95) is inconsistent.

## OpenAPI / Swagger support

Supporting Swagger UI and OpenAPI can be added with the `@nestjs/swagger` dependency. It is very easy to implement the OpenAPI documentation

## Library release date

The version of NestJS tested released on August 27 2026. It is still maintained.

## Major Security incidents
The last "High" security incident reported on GitHub was a [CVSS 7.5/10] (https://github.com/nestjs/nest/security/advisories/GHSA-jgpx-8x6j-fcpf) which was reported November 12 2026
