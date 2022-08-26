# I4GxZuri - Node Authentication using JWT

Node app for managing products secured with roled based authentication

## Products

Products records can be created, retrieved, updated and deleted based on user role

RETRIEVE - Admin, Manager, Staff, User.
CREATE - Admin, Manager, Staff.
UPDATE - Admin, Manager.
DELETE - Admin.

### Product Routes

1. CREATE

```
POST - "/api/products"
{
    "name": "<product_name>", //string
    "price": <price> , // number
}
```

2. INDEX

```
GET - "/api/products"
```

3. SHOW

```
GET - "/api/products/:product_id"
```

4. UPDATE

```
PATCH - "/api/products/:product_id"
{
    "field": <new_value>
}
```

5. DELETE

```
DELETE - "/api/products/:product_id"
```
