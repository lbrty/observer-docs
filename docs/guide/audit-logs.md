# 🧿 Audit logs

Audit logs are useful to

* track important events,
* changes in database,
* track history of changes and maybe even revert some actions.

Each log can have expiration datetime after which we can cleanup those events.

## Schema

Audit logs schema is defined below most important fields are `ref` and `data`.

```py
Table(
    Column("id", UUID(), primary_key=True),
    Column("ref", Text()),
    Column("data", JSONB()),
    Column("created_at", TIMESTAMP(timezone=True)),
    Column("expires_at", TIMESTAMP(timezone=True)),
)
```

### `ref`

Example of `ref` looks like 

```ini
endpoint=create_place,action=create:place,place_id=11111111-1111-1111-1111-111111111111,ref_id=523608c6-23ff-421b-a0ed-a1aec17dadc6
```

Where

* `endpoint` - is name request handler function,
* `action` - is type of action user or system has performed,
* `place_id` - depending on the domain of action in this case `place` this is referenced place record,
* `ref_id` - system identifier or user id.

### Action types

Actions have the following format

`<ACTION>:<DOMAIN>` where `DOMAIN` might be entity or any other domain context.

Actions can be one of:

* `create`
* `update`
* `delete`
* `token:<login|refresh|register>`
* `reset:password`

### `data`

Data is optional field might contain updated/created or any other audit metadata.

```json
{
    "id": "11111111-1111-1111-1111-111111111111",
    "code": "ks",
    "name": "Kacy Saj",
    "state_id": "523608c6-23ff-421b-a0ed-a1aec17dadc6",
    "country_id": "9d05d2b1-92b4-4f3e-b034-98091c1560bc",
    "place_type": "village"
}
```
