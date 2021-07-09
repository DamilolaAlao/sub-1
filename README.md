## Getting Started

### Installation

1. install the dependencies using `npm install` or `npm i`

2. Rename the file `.env.example` to `.env`

3. Start the app using `npm start`

4. After that, go to: `http://localhost:8080/`

### Available routes

| Method | Resource | Description                                             |
| :----- | :------- | :------------------------------------------------------ |
| `POST` | `/`      | Creates new products ( it takes a "productArray" field) |
| `GET`  | `/`      | Returns all products and warehouses                     |

### Available scripts

```bash
# development mode
$ npm run dev

# production mode
$ npm start
```
