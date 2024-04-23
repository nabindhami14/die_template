```sh
npm run dev
```

[Migrations](https://sequelize.org/docs/v7/cli/)

```js
BASIC = 0;
OAUTH2 = 1;
JWT = 2;
```

```sql
CREATE TABLE merchants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    authType ENUM('BASIC', 'OAUTH2', 'JWT'),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```


```sql
CREATE TABLE auth_type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
```