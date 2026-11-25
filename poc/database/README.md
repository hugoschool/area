# POC - Database

## Formalism

For each technology you might choose, create a folder named as such:
```
<database>
```

As examples:
- the MongoDB database: `mongodb`
- the PostgreSQL: `postgresql`

## Application creation

Create a docker compose file to initialize and launch the DB.

What will be stored in the database (**initial schema**):
- User
  - ID
  - Username
  - Created at date

- Posts
  - Title
  - Content of the post
  - What user created the post

Create a script (**initial-users**) that creates X users using fake data and the initial schema. (1000 users if X is not specified)

Create a script (**initial-posts**) that creates X posts using fake data and the initial schema. (10000 posts if X is not specified)

Now add new data to the database tables / documents, here is the **updated schema**:
- User
  - ID
  - Username
  - Description
  - Created at date

- Posts
  - Title
  - Content of the post
  - Number of likes
  - What user created the post

## Validation

To "validate" a POC, you **must** write about:
- is the database relational or non-relational?
- how well does it integrate with ORMs?
- how easy was it to setup using docker?
- how easy was it to migrate the existing data?
- how easy is it to backup?
- how robust is it? how long does it take to do a query now?
