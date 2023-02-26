# Configuration

Below you can find environment variables Observer uses and
depends and yet many come with defaults.

::: tip
Observer allows users to configure using `.env` files as well.
:::

## Server settings

### `DEBUG`

Debug mode if set enables debug mode in FastAPI.

```py
debug: bool = False
```

### `PORT`

Server port.

```py
port: int = 3000
```

## Database settings

Postgres is default database Observer uses so it
has to be configured via DSN like

```sh
DB_URI=postgresql+asyncpg://postgres:postgres@localhost:5432/observer
```

Also it is possible to configure connection pooling and debugging options.

### `DB_URI`

```py
db_uri: PostgresDsn
```

### `POOL_SIZE`

```py
pool_size: int = 5
```

### `MAX_OVERFLOW`

```py
max_overflow: int = 10
```

### `POOL_TIMEOUT`

```py
pool_timeout: int = 30
```

### `ECHO`

Echo SQL queries and other debugging information.

```py
echo: bool = False
```

### `ECHO_POOL`

Log pool operations such as connection check out, number of active connections etc.

```py
echo_pool: bool = False
```

## OpenAPI

### `TITLE`

```py
title: str = "Observer API"
```

### `DESCRIPTION`

```py
description: str = "Observer API server"
```

### `VERSION`

```py
version: str = "0.1.0"
```

### `APP_DOMAIN`

Domain name at which frontend application runs.

```py
app_domain: str = "observer.app"
```

## Invite only mode

### `INVITE_ONLY`

```py
invite_only: bool = False
```

### `ADMIN_EMAILS`

When defininig please use comma `,` to separate emails.

```py
admin_emails: List[str] = ["admin@examples.com"]
```

Example:

```sh
ADMIN_EMAILS=admin@examples.com,admin-staff@examples.com
```

## Keystore

### `KEYSTORE_PATH`

Path to keystore folder relative to `STORAGE_ROOT`.

```py
keystore_path: str = "keys"
```

### `KEY_SIZE`

Used to generate new keys see [encryption keys](./encryption/keys).

```py
key_size: int = 2048
```

### `PUBLIC_EXPONENT`

Used to generate new keys

```py
public_exponent: int = 65537
```

### `AES_KEY_BITS`

Used to generate random passwords and to use in symmetric encryption for AES IV and secret.
Python [cryptography](https://cryptography.io/en/latest/hazmat/primitives/symmetric-encryption/) is used in the implementation.

```py
aes_key_bits: int = 32
```

## Auth and accounts

### `PASSWORD_RESET_URL`

Password reset url should be a frontend route which accepts `code` path parameter.

```py
password_reset_url: str = "/reset-password/{code}"
```

### `PASSWORD_RESET_EXPIRATION_MINUTES`

Expiration of password reset code in minutes.

```py
password_reset_expiration_minutes: int = 15
```

### `PASSWORD_CHANGE_SUBJECT`

```py
password_change_subject: str = "Your password has been updated"
```

### `CONFIRMATION_URL`

Account confirmation url should be a frontend route which accepts `code` path parameter.

```py
confirmation_url: str = "/account/confirm/{code}"
```

### `CONFIRMATION_EXPIRATION_MINUTES`

Expiration of account confirmation code in minutes.

```py
confirmation_expiration_minutes: int = 20
```

### `INVITE_URL`

Invite url should be a frontend route which accepts `code` path parameter.

```py
invite_url: str = "/account/invites/{code}"
```

### `INVITE_EXPIRATION_MINUTES`

Expiration of invite code in minutes.

```py
invite_expiration_minutes: int = 15
```

### `INVITE_SUBJECT`

Subject of invite emails.

```py
invite_subject: str = "You are invited to join Observer"
```

## JWT session expiration

### `ACCESS_TOKEN_EXPIRATION_MINUTES`

```py
access_token_expiration_minutes: int = 15
```

### `REFRESH_TOKEN_EXPIRATION_DAYS`

```py
refresh_token_expiration_days: int = 180
```

## TOTP

### `TOTP_LEEWAY`

Allowed leeway for OTP code validation defaults to 10 seconds.

```py
# Allow 10 seconds more for otp codes
totp_leeway: int = 10
```

### `NUM_BACKUP_CODES`

How many backup codes to generate.

```py
num_backup_codes: int = 6
```

### `MFA_RESET_SUBJECT`

```py
mfa_reset_subject: str = "MFA has been reset"
```

## CORS

### `CORS_ORIGINS`

When defininig please use comma `,` to separate CORS origins.

```py
cors_origins: List[str] = ["*"]
```

### `CORS_ALLOW_CREDENTIALS`

```py
cors_allow_credentials: bool = True
```

## Gzip

### `GZIP_LEVEL`

```py
gzip_level: int = 8
```

### `GZIP_AFTER_BYTES`

Compress documents more than given bytes.

```py
gzip_after_bytes: int = 1024
```

## Mailer

### `MAILER_TYPE`

Can be one of `gmail`, `sendgrid`, `dummy`:

```py
mailer_type: str = "dummy"
```

### `FROM_EMAIL`

```py
from_email: str = "no-reply@email.com"
```

### Gmail

Gmail mailer expects the following variable to be set

1. `GMAIL_USERNAME`
2. `GMAIL_PASSWORD`
3. `GMAIL_PORT`, default: 465
4. `GMAIL_HOSTNAME`, default: smtp.gmail.com

### Sendgrid

Sendgrid mailer expects `SENDGRID_API_KEY` variable to be set.

## Audits

### `MFA_EVENT_EXPIRATION_DAYS`

How many days to keep MFA related audit events before deletion.

```py
mfa_event_expiration_days: int = 365
```

### `AUDIT_EVENT_EXPIRATION_DAYS`

Default audit expiration duration in days.

```py
audit_event_expiration_days: int = 365
```

### `LOGIN_EVENT_EXPIRATION_DAYS`

How many days to keep last login events.

```py
login_event_expiration_days: int = 7
```

### `TOKEN_REFRESH_EVENT_EXPIRATION_DAYS`

How many days to keep auth token refresh events.

```py
token_refresh_event_expiration_days: int = 7
```

## Storage

### `STORAGE_KIND`

Storage kind can be `fs` or `s3`.

```py
storage_kind: str = StorageKind.fs
```

### `STORAGE_ROOT`

Depending on `STORAGE_KIND` can be absolute path for `fs` and S3 bucket key for `s3`.
On storage configuration options look at [s3 storage configuration](#s3-storage)

```py
storage_root: str = str(here / "uploads")
```

#### Examples

##### fs

For file system storage kind this value must be absolute value.

```py
storage_root: str = "/mnt/efs/uploads"
```

##### s3

For S3 storage kind this value must a key in the bucket.

```py
storage_root: str = "uploads"
```

### `MAX_UPLOAD_SIZE`

Maximum file upload size in bytes.

```py
max_upload_size = 1024 * 1024 * 5
```

### `DOCUMENTS_PATH`

Relative location for document uploads it must relative to [storage root](#storage-root)

```py
documents_path: str = "documents"
```

## S3 storage

### `S3_ENDPOINT`

AWS S3 endpoint url.

```py
s3_endpoint: Optional[str] = "https://s3.aws.amazon.com/observer"
```

### `S3_REGION`

```py
s3_region: Optional[str] = "eu-central-1"
```

### `S3_BUCKET`

```py
s3_bucket: Optional[str] = "observer-keys"
```
