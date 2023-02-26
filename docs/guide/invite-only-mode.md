# 🏕️ Invite only mode

::: info
Only known users and defined admin emails allowed to register and sing into system.
:::

Often we want to restrict systems to allow only invited or known people to let into system.
To enable this it is possible to [configure invite only mode](./configuration#invite-only-mode).

Once a new user invited invite email with registration link will be mailed and will
be valid for 15 minutes by default and can be configured by [`INVITE_EXPIRATION_MINUTES`](./configuration#invite-expiration-minutes).

Depending on frontend implementation you might need to provide different [`INVITE_URL=/account/invites/{code}`](./configuration#invite-url).

## Enabling

To enable invite only mode please provide the following environment variables

```sh
INVITE_ONLY=true|false
ADMIN_EMAILS=admin@examples.com,admin-staff@examples.com
INVITE_EXPIRATION_MINUTES=15
INVITE_URL=/account/invites/{code}
```
