const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
import connectToMongoDb from './db/connectMongoDb';
import router from './routes/User.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://127.0.0.1:5173'
}));

connectToMongoDb()
    .then(() => {
        app.use('/api', router);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error starting server:", error);
    });

export { app };