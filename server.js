const app = require("./index");
const dotenv = require("dotenv");
dotenv.config();




app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(process.env.LISTEN_PORT, () => {
    console.log(`Server running at ${process.env.DB_HOST}:${process.env.LISTEN_PORT}`);
});