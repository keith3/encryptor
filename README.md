### Installation
```
meteor add lufeng:encryptor
```

**example**: encrypt a string as django 1.7 method

```
// code in server part
var plainPasswd = 'helloworld';
var encryptedPasswd = Encryptor.django(plainPassword);
```

