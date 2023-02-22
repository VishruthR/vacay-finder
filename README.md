To run frontend:

```
cd vacay-finder
npm run dev
```

To run backend:

Set up db connection:

1. Create a new db user on MongoDB Atlas and copy your password.
2. Add your username and password to api/private/credentials.py

```
cd api
```

Start up the python virtual environment.

```
flask --app server run
```
