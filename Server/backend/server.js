require('dotenv').config()
require('./middlewares/Passport');
require('./database/db');

const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const authRouter = require('./routes/auth');
const userRouter = require('./routes/api/user');
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT;
const passport = require('passport');

// const origin = "http://localhost:3000/"
// app.use(
//     cors({
//       origin: ["http://localhost:3000/"],
//       methods: ["GET", "POST"],
//       credentials: true,
//     })
//   );
  
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api', passport.authenticate('jwt', {session: false}), userRouter);  

app.get('/test', (req, res) => {
    res.json({ success: true, message: 'Welcome to backend zone!',items:"No Items" });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
