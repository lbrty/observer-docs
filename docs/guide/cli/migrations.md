# Database migrations

For database migrations Alembic is used.
Command line interface supports the following actions

* `upgrade` - upgrade database,
* `downgrade` - rollback migration,
* `history` - shows migration history,
* `current` - shows current revision,
* `revision` - create migration.

```sh
~/P/observer ❱ python -m observer db --help

╭─ Commands ─────────────────────────────────╮
│ current                                    │
│ downgrade                                  │
│ history                                    │
│ revision                                   │
│ upgrade                                    │
╰────────────────────────────────────────────╯
```
