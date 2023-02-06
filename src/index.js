const express = require('express');
const connect = require('./config/db');

const app = express();

const port = 8001

const {register, login} = require('./controllers/auth.controller')
const usercontroller = require('./controllers/user.controller')
const blogcontroller = require("./controllers/blog.controller");

const authorize = require('./middleware/authorize')

app.use(express.json());

app.post('/register', register)

app.post('/login', login)

app.use("/user_following", usercontroller);

app.use("/blog", blogcontroller);

app.get("/", (req, res) => res.send({ message: `server running` }));


app.listen(port, async()=>{
    await connect();
    console.log(`listening on port ${port}`);
})