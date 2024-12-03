FOR SETTING CONNECTION STRING:
1. Navigate to /book-api/.env.example
2. Set the URI value equal to your mongoDB connection string
3. Save and rename the file to `.env`
4. Done!

Import test.books.json to your mongoDB for data. There is also a function in db.js if you want to generate some data.

To start backend:

1. `cd book-api'
2. `npm install`
3. `node index.js`
4. Backend is now running on http://localhost:3000/

To start frontend:

1. `cd book-frontend`
2. `npm install`
3. `npm run start`
4. Frontend is now running, it might ask you to change the port.

Made by Sam Bryant and Greyson Hamlin.
