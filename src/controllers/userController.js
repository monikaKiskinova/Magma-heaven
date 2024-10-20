import { Router } from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";

const userController = Router(); 

userController.get('/register', (req, res) => {
    res.render('register', {title: 'Register Page'});
});

userController.post('/register', async (req, res) => {
    const {username, email, password, rePassword} = req.body;

    try {
        const token = await userService.register(username, email, password, rePassword);
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        res.redirect('/');
    } catch(err) {
        //TODO: Add error handling
        console.log('An error occurred', err.message);
        res.render('register', {title: 'Register Page', username, email});
    }
});

userController.get('/login', (req, res) => {
    res.render('login', {title: 'Login Page'});
}); 

userController.post('/login', async (req, res) => {
    const {email, password} = req.body; 

    try { 
        const token = await userService.login(email, password);
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        res.redirect('/');
    } catch (err) {
        //TODO: Send error message
        res.render('login', {title: 'Login Page', email});
    }
}); 

userController.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
})

export default userController;