# I4GxZuri - Node Authentication using JWT

Node app for managing products secured with roled based authentication

## PRODUCTS

Products records can be created, retrieved, updated and deleted based on user role

RETRIEVE - Admin, Manager, Staff, User.

CREATE - Admin, Manager, Staff.

UPDATE - Admin, Manager.

DELETE - Admin.

### Product Routes

1. CREATE

```
url:
POST - "/api/products"

body:
{
    "name": "<product_name>",
    "price": <price>
}
```

2. INDEX

```
url:
GET - "/api/products"
```

3. SHOW

```
url:
GET - "/api/products/:product_id"
```

4. UPDATE

```
url:
PATCH - "/api/products/:product_id"

body:
{
    "field": <new_value>
}
```

5. DELETE

```
url:
DELETE - "/api/products/:product_id"
```

### Product Seeds

the following records are seeded on server startup:

```
[
    { name: "Hawkeye's Bow", price: 50 },
    { name: "Berserker Staff", price: 120 },
    { name: "War Machine Armor", price: 350 },
    { name: "The Monolith", price: 560 },
    { name: "The Winter Solider's Arm", price: 90 },
    { name: "Pym Particles", price: 150 },
]
```

## USERS

Users can signup and login. Users can signup as either Admins, Managers, Staff or _basic_ Users.

### User Routes

1. SIGNUP

```
url:
POST - "/api/users/signup"

body:
{
    "email": "<email>",
    "password": "<password>",
    "role": "<role>"
}
```

2. LOGIN

```
url:
POST - "/api/users/login"

body:
{
    "email": "<email>",
    "password": "<password>"
}
```

### User Seeds

the following records are seeded on server startup:

```
[
    { email: "admin@mail.com", password: "abcABC123!", role: "admin" },
    { email: "manager@mail.com", password: "abcABC123!", role: "manager" },
    { email: "staff@mail.com", password: "abcABC123!", role: "staff" },
    { email: "user@mail.com", password: "abcABC123!", role: "user" },
]
```
