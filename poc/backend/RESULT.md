# POC - go-gin

## Usage
Run the `go-gin` POC by doing `go run main.go`

The API is documented with Swagger UI:
- Interactive docs: /docs
- Raw OpenAPI spec: /docs/docs.json

## CPU / RAM usage

### Idle

During idle, just launching the application and not doing any requests, the application stays between
**32 - 70MB** of RAM usage and most of the time staying at **0% CPU usage**.

### Under 10000 users

During the 10000 users load, the application jumped to **250-300 MB** of RAM usage and peaked at **130% CPU usage**.

## Load testing

Tested the application on multiple levels:
- 1000 users: no problems
- 5000 users: no problems
- 10000 users: no problems
- 20000 users: starting to encounter p(95) > 500ms problems on some runs.
- 30000 users: still having inconsistent results on p(95).
- 40000 users: request start failing

We can deduce that the app can sustain **under 20000 users without problems**
and under 40000 users where users will start seeing some failure.

## OpenAPI / Swagger support

Supporting Swagger and OpenAPI is easy.

It can be added with the import of `"github.com/swaggo/files" and "github.com/swaggo/gin-swagger"`.

## Library release date

The version of gin we're using was released on 28 February 2026.

It's still maintained.

## Major security incidents
There is no major security incident reported on the version we are using.
