# API REST 

API REST developed with Express and MongoDB for the Next.js TailorHub Technical Challenge 
(https://github.com/SaraMansori/next-js-challenge-front)

## Dependencies Used

- Bcrypt
- CORS
- Dotenv
- Express
- JSON Web Token
- Mongoose
- Morgan
- Nodemon
- Typescript
- TS Node Dev

## Server Routes

### Base Route

`https://next-api-rest.herokuapp.com/api/`

### Restaurants

|**URL**|**Method**|**Description**|
|:-----|:-----|:-----|
|/restaurants | `GET` | Get all restaurants in the DB |
|/restaurants/:id | `GET` | Get details of a restaurant |
|/restaurants | `POST` | Create new restaurant |
|/restaurants/:id | `PUT` | Updates a restaurant |
|/restaurants/:id | `DEL` | Deletes a restaurant |

### Authentication

|**URL**|**Method**|**Body**|**Description**|
|:-----|:-----|:-----|:-----|
|/auth/signup | `POST` | `credentials: { username: <username>, password: <password>}` | Sign Up a user |
|/auth/login | `POST` | `credentials: {username: <username>, password: <password>}` | Log In a user |
|/auth/verify | `POST` | `token: <token>` | Verifies if the token is valid |

### User

|**URL**|**Method**|**Config**|**Body**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|/user/profile | `GET` | Authorization: `Bearer <token>` | - | Get user details |
|/user/favorites/restaurants | `GET` | Authorization: `Bearer <token>` | - | Gets all the favorite restaurants of an user |
|/user/favorites/restaurants | `POST` | Authorization: `Bearer <token>` | `{restaurantId: <restaurantId>, type: <'add' OR 'remove'>}` | Updates the favorite restaurants of an user |
