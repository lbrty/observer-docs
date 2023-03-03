# 🔑 Keychain

Keychain is used to load, store and lookup encryption keys, once loaded all keys are ordered in descending order `newest=>oldest` [_1_](https://github.com/lbrty/observer/blob/main/observer/services/storage.py#L121-L124), [_2_](https://github.com/lbrty/observer/blob/main/observer/services/storage.py#L71).

::: info
At the moment password protected private keys are not supported.
:::

As it was mentioned in [deploying](../deploying) keychain is initialised with
[separate instance of storage backend](https://github.com/lbrty/observer/blob/main/observer/main.py#L80) which is relative to keystore folder location

```py
class IKeychain(Protocol):
    keys: List[PrivateKey] = []

    async def load(self, path: str, storage: IStorage):
        raise NotImplementedError

    async def find(self, key_hash: str) -> PrivateKey:
        raise NotImplementedError
```

Keychain is used by [crypto](https://github.com/lbrty/observer/blob/main/observer/services/crypto.py) module to encrypt/decrypt data.
