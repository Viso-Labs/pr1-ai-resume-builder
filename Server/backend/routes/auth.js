const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const fakeLocal = require("../database/fakeLocal.json");
const User = require("../models/userModel");
const {userSignUp, userLogin, passwordReset, newLinkForPassword} = require('../controllers/authController');

function getJwt() {
    return fakeLocal.Authorization?.substring(7); 
}

router.post('/login', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            const message = err ? err?.message ? err.message : err : info?.message;
            return res.status(400).json({
                message: message,
                user   : user
            });
        }
  
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
  
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '1d' });

            // const fakeToken = getJwt;
            // return res.json({user, token});
            req.body.user = user;
            req.body.token = token;
            next();
        });
    })(req, res);
  },userLogin);
  

router.post('/signup', userSignUp);
router.post('/request-reset-password', newLinkForPassword);
router.post('/reset-password', passwordReset);

module.exports = router;