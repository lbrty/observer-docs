# 🔐 Document encryption

All uploaded documents are encrypted using `AES` where random decryption
key is generated and encrypted using the latest `RSA` key from keychain.

To encrypt document random secret key and IV values are generated
once encryption is done secret key, IV and tag are also encrypted and
stored have the following format `<secret>:<iv>:<tag>` when decrypted.
To see implementation please follow 👉 [link](https://github.com/lbrty/observer/blob/main/observer/services/uploads.py#L47) to upload handler service sources.

Encrypted secrets then [encoded one more time](https://github.com/lbrty/observer/blob/main/observer/services/uploads.py#L63) to include RSA key hash which was
used to encrypt secrets `<key_hash>:<encrypted_secrets>`

# Document structure

```py
id: Identifier
encryption_key: Optional[str]
name: str
size: int
path: str
mimetype: str
owner_id: Identifier
project_id: Optional[Identifier]
created_at: datetime
```
