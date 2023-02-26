# ☂️ Session handling

JWT is used to keep session management stateless simple `access token` + `refresh token` cookies is employed.

Motivation behind this is to avoid database queries to verify sessions and keep it as stateless as possible.
To manage sessions we use JWT access tokens and refresh tokens where access token is a short living
token, while refresh tokens will last a lot longer they are used to obtain new access tokens.

## Cookies

```py
AccessTokenKey: str = "access_token"
RefreshTokenKey: str = "refresh_token"
```

`access_token` has expiration time of 15 minutes while `refresh_token` expires after 180 days.

Values can be adjusted via [configuration](./configuration#jwt-session-expiration).

`refresh_token` is HTTP only cookie which is managed by API or used to issue new `access_token` once it expires.

## Password hashing

To hash and verify user's passwords we use `passlib` with `bcrypt` and for MFA (TOTP) we use `totp` packages.

**NOTE:**

Application depends on set of private keys which then used to encrypt/decrypt generated private keys.
