# user-cached-authenticated
This is an API to get and add Users with JWT Authentication and Redis Cache

## About the ideia

This project aims to show how to do authentication with JWT and use Redis as cache of user info.
The time to retrieve user information on cache is a lot faster than from the database MongoDb.

## API

All endpoints live under the URL /api/v1/ and then generally follow the REST architecture.

# Endpoints
All requests must be encoded as JSON with the "Content-Type: application/json" header and JWT token header "x-acess-token: $token". Most responses, including errors, are encoded exclusively as JSON as well.

To get a Json web token, you need to login with a valid user/password (GET /login).

### POST /register
```js
{
	"username": string",
	"password": string
}
```

### GET /login
```js
{
	"username": string",
	"password": string
}
```

#### JSON response example of login resource
```js
{
	"auth": true,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmMzOGE1MjQzNDU0OTZjY2U4MWY0YyIsImlhdCI6MTY3MzM3MTc5MywiZXhwIjoxNjczMzc0NzkzfQ.4X3pJ2CsdD6oVFGUukKJ1xnv2nDjLW3HdDgOMEmBp94"
}
```

### GET /user/:id

#### JSON response example of get user by id resource

```js
{
		"_id": "63bb24c56fcb6f95fde063b6",
		"username": "vini1",
		"password": "$2b$10$xlpZLbxrz60hYA89l14p3.jSV.oqJ6AQRVW/.hWwOSCaoKncOlRji",
		"createdAt": "2023-01-08T20:17:09.232Z",
		"updatedAt": "2023-01-08T20:17:09.232Z",
		"__v": 0
	}
```
