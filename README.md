# Express + Typescript + Docker example
A dockerized Express.js app, with Typescript and hot reload enabled.

Made in another project, then realized I don't actually need a server. Might as well save it for later.

## Setup

Initially run:
```
$ docker compose up --build -d
```

Then:
```
$ docker-compose up -d
```

To tail the logs use (if running with -d):
```
docker logs server --follow
```
