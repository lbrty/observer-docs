# Permissions

Permissions are bound to projects and belong to users and allow to perform certain actions in the system.

When new users invited default permission matrix used according to roles.

## Granting permissions

Permissions can be granted in two ways

1. By inviting a new user with permissions,
2. By adding a new project member

### Inviting new user

```json
POST /admin/invites

{
  "email": "user@example.com",
  "role": "admin",
  "permissions": [
    {
      "can_create": false,
      "can_read": true,
      "can_update": false,
      "can_delete": false,
      "can_read_documents": false,
      "can_read_personal_info": false,
      "can_invite_members": false,
      "project_id": "405d8375-3514-403b-8c43-83ae74cfe0e9"
    }
  ]
}
```

### Adding project members

```json
POST /projects/{project_id}/members

{
  "can_create": false,
  "can_read": true,
  "can_update": false,
  "can_delete": false,
  "can_read_documents": false,
  "can_read_personal_info": false,
  "can_invite_members": false,
  "user_id": "a169451c-8525-4352-b8ca-070dd449a1a5",
  "project_id": "405d8375-3514-403b-8c43-83ae74cfe0e9"
}
```

## Roles

```py
class Role(str, Enum):
    admin = "admin"
    staff = "staff"
    consultant = "consultant"
    guest = "guest"
```

## Permission matrix

As you can see below each permission clearly defines intention so no futher comments needed.

```py
FullProjectAccess = BasePermission(
    can_create=True,
    can_read=True,
    can_update=True,
    can_delete=True,
    can_read_documents=True,
    can_read_personal_info=True,
    can_invite_members=True,
)

permission_matrix: Dict[Role, BasePermission] = {
    Role.admin: FullProjectAccess,
    Role.consultant: FullProjectAccess,
    Role.staff: BasePermission(
        can_create=True,
        can_read=True,
        can_update=True,
        can_delete=False,
        can_read_documents=False,
        can_read_personal_info=False,
        can_invite_members=True,
    ),
    Role.guest: BasePermission(
        can_create=False,
        can_read=True,
        can_update=False,
        can_delete=False,
        can_read_documents=False,
        can_read_personal_info=False,
        can_invite_members=False,
    ),
}
```
