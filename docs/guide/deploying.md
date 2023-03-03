# 🛫 Deploying

::: tip
Please first see [configuration options](./configuration) and make sure you have prepared everything you need.
:::

Depending on requirements you can deploy and run Observer [from source](https://github.com/lbrty/observer) or use docker image [`sultaniman/observer`](https://hub.docker.com/r/sultaniman/observer).

## Prerequisites

Before you can proceed please decide and configure the following things

1. Domain for frontend app [`APP_DOMAIN`](./configuration#app-domain) - used to build links in emails,
2. Mailer backend [`MAILER_TYPE`](./configuration#mailer) - only sendgrid and smtp gmail supported at the moment each required additional configuration,
3. Storage [`STORAGE`](./configuration#storage) - it is used to store encryption keys as well as to store documents,
4. Database [`DB_URI`](./configuration#db-uri) - it has to be Postgres 12+,
5. Encryption keys - personal information of people and animals are encrypted, please [generate keys](./encryption/keys) and keep in mind to place keys where they belong.

## Configuring storage

Once you decide on [`STORAGE_KIND`](./configuration#storage-kind) `fs` or `s3`, define the following things

1. [`STORAGE_ROOT`](./configuration#storage-root) is used as prefix to build paths when uploading,deleting, reading files,
2. [`DOCUMENTS_PATH`](./configuration#documents-path) (relative path to `STORAGE_ROOT`) and finally define,
3. [`KEYSTORE_PATH`](./configuration#keystore-path) (relative path to `STORAGE_ROOT`),
4. [`MAX_UPLOAD_SIZE`](./configuration#max-upload-size) it defaults to 5Mb but you can also adjust this.

::: warning
For S3 storage keys and documents have to reside in the same S3 bucket under different paths for example
if you have a common root key `/storage`
```
/storage/
    - keys/
    - documents/
```
:::

Keychain in this case is initialised with separate instance of storage which uses different path prefix `/storage/keys`,
also documents storage also uses different prefix `/storage/documents`.

It is also possible to mount EFS and use with filesystem storage backend.

## Environment variables

Observer also allows to use `.env` file which can come handy in some cases, simply add configuration in the file.

```sh
DB_URI=postgresql+asyncpg://postgres:postgres@localhost:5432/observer
STORAGE_KIND=fs
STORAGE_ROOT=/uploads/
DOCUMENTS_PATH=documents
KEYSTORE_PATH=keys
```
