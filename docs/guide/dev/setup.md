# Development

::: tip
Project requires minimum Python version of 3.10
:::

## Configuration

For local development please make sure to install

1. [Poetry](https://python-poetry.org/),
2. Install dependencies `poetry install`,
3. [Generate keys](../encryption/keys),
4. Postgres.

Since for local development it is enough to use local file system as storage,
configuration below should be sufficient to run API (can be served via `.env` file)

```sh
DB_URI=postgresql+asyncpg://postgres:postgres@localhost:5432/observer
STORAGE_KIND=fs
KEYSTORE_PATH=/ABS/PATH/TO/keys
STORAGE_ROOT=/ABS/PATH/TO/uploads
```

## Running

First you need to apply database migrations

```sh
python -m observer db upgrade
```

To run server you need to activate virtualenv created by poetry then start server
using the following command

```sh
python -m observer server start --port 3000
# OR
make serve
```


## Postgres with docker
If you have docker installed you can consider to use the following
docker compose file instead of installing Postgres in your main system

```yml
version: "3.1"

services:
  db:
    image: postgres:14.5
    volumes:
      - postgres_data:/var/lib/postgresql/data

    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres

    ports:  # expose postgres into host
      - "127.0.0.1:5432:5432"

volumes:
  # for persistence between restarts
  postgres_data: {}
```
