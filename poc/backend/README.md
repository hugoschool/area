# POC - Backend

## Formalism

For each technology you might choose, create a folder named as such:
```
<language / technology>-<framework / library>
```

As an example, the ExpressJS framework for the TypeScript language, the folder to POC this technology will be: `ts-express`.

## Application creation

Make your backend run depend on the `PORT` environment variable, with by default port 3000.

Routes that must be done:
- `GET /ping`:
  - Must always have a status code of 200
  - Return, as plain text, "ok"
- `POST /login`:
  - Must always have a status code of 200
  - Generate a JWT token for the following payload: `{ "time": <current unix timestamp> }`
    - The secret for the JWT must be coming from the `JWT_SECRET` environment variable
  - Return, as JSON, `{ "token": <GENERATED JWT TOKEN> }`

Create the OpenAPI specification for both of these routes, and create a `/docs` route to display the Swagger UI.

## Load testing

In this folder, you will find a `load-testing.js` file.

To use it, you must use [k6](https://k6.io).

```sh
k6 run load-testing.js
```

By default, there are 10000 concurrent users.

You can specify the amount of users to use the service:
```sh
k6 run load-testing.js -e USERS_AMOUNT=50000
```

## Validation

To "validate" a POC, you **must** write about:
- observe the "idle" CPU / RAM usage, document it
- launch the [K6 load script](#load-testing) (10000 users), observe the CPU / RAM usage then document it
- launch the [K6 load script](#load-testing) with more and more users, document whenever the users make the tests fail (aka: how many users the server can support)
- how easy was it to support the OpenAPI / Swagger UI?
- latest library release date, is it still currently supported?
- any major recent security incidents?
