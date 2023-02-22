# Encryption keys 🔐

RSA keys are used to

1. To encrypt certain personal information,
2. Issue and validate JWT access and refresh tokens,
3. AES secrets we generate to encrypt uploaded documents.

## Generating a key

It is possible to use `openssl` to generate keys

```sh
openssl genrsa -out key.pem 2048
```

You can also use built-in CLI generator

```sh
python -m observer keys generate --size 2048 -o key.pem 
```

There is also related configuration options via environment variables which are used to generate keys.

### `KEY_SIZE`

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
