# Encryption

Observer encrypts certain personal information of displaced persons and of all uploaded documents.
While personal information is encrypted using `RSA` private key, documents encrypted using hybrid method
where `AES` symmetric encryption is used with generated secrets then using `RSA` key to encrypt secrets.

## ❄️ Entity level encryption

For some entities we use encryption for sensitive personal information each of entities
contain a field `encryption_key` which has the following format `system_key_hash:base64_key_contents`
where `system_key_hash` is a hash of a key which is used to encrypt generated private key `base64_key_content`.
